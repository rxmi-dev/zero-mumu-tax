# backend/app/routes/auth.py
from flask import Blueprint, request, jsonify, g, current_app
from datetime import datetime, timedelta
import uuid
import hashlib
import google.oauth2.id_token
import google.auth.transport.requests
from app.extensions import db, jwt, limiter, cache
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    decode_token,
    get_jwt_identity,
    get_jwt,
)
from app.models.user import User
from app.models.credit import CreditBalance, CreditTransaction
from app.models.referral import Referral
from app.models.token import TokenBlacklist
from app.models.event import UserEvent
from app.models.badge import Badge
from app.config import Config
from app.utils.auth_decorators import token_required, get_current_user
import traceback

bp = Blueprint("auth", __name__, url_prefix="/api/auth")


@bp.route("/google", methods=["POST", "OPTIONS"])
@limiter.limit("10 per minute")
def google_auth():
    """Authenticate with Google OAuth - ONLY sign-in method"""

    # Handle preflight OPTIONS request
    if request.method == "OPTIONS":
        return "", 200

    try:
        data = request.get_json() or {}
        credential = data.get("credential")
        referral_code = data.get("ref")

        current_app.logger.info(
            f"Google auth attempt - credential present: {bool(credential)}"
        )

        if not credential:
            return jsonify({"error": "No credential provided"}), 400

        # Verify Google token
        try:
            # Create request object for Google
            request_adapter = google.auth.transport.requests.Request()

            idinfo = google.oauth2.id_token.verify_oauth2_token(
                credential, request_adapter, Config.GOOGLE_CLIENT_ID
            )

            google_user = {
                "google_id": idinfo["sub"],
                "email": idinfo["email"].lower().strip(),
                "full_name": idinfo.get("name", "").strip(),
                "profile_picture": idinfo.get("picture", ""),
                "email_verified": idinfo.get("email_verified", False),
            }

        except ValueError as e:
            current_app.logger.error(f"Google token verification failed: {str(e)}")
            return jsonify({"error": f"Invalid Google token: {str(e)}"}), 400

        # Find or create user
        user = User.query.filter_by(google_id=google_user["google_id"]).first()
        is_new_user = False

        if not user:
            # Check if user exists with this email
            user = User.query.filter_by(email=google_user["email"]).first()
            if user:
                # Link Google account to existing user
                user.google_id = google_user["google_id"]
                user.profile_picture = google_user["profile_picture"]
                current_app.logger.info(
                    f"Linked Google account to existing user: {user.email}"
                )
            else:
                # Create new user
                is_new_user = True
                user = User(
                    google_id=google_user["google_id"],
                    email=google_user["email"],
                    full_name=google_user["full_name"],
                    profile_picture=google_user["profile_picture"],
                    email_verified=True,
                    last_login=datetime.utcnow(),
                    last_ip=request.remote_addr,
                )
                db.session.add(user)
                db.session.flush()  # Get user ID without committing

                # Give 10 free credits to new users (FIXED: 10 credits, not 15)
                credit = CreditBalance(user_id=user.id, balance=10)
                db.session.add(credit)

                # Track signup event
                event = UserEvent(
                    user_id=user.id,
                    event_type="signup",
                    page="google_auth",
                    ip_address=request.remote_addr,
                    user_agent=(
                        request.user_agent.string if request.user_agent else None
                    ),
                )
                db.session.add(event)

                current_app.logger.info(
                    f"Created new user: {user.email} with ID: {user.id}"
                )

                # Handle referral if provided (FIXED: both get 10 credits)
                if referral_code:
                    referral = Referral.query.filter_by(
                        referral_code=referral_code.upper(), used=False
                    ).first()

                    if referral:
                        referral.used = True
                        referral.referred_id = user.id
                        referral.used_at = datetime.utcnow()

                        # Give 10 bonus credits to referrer (FIXED: 10, not 15)
                        referrer_credit = CreditBalance.query.filter_by(
                            user_id=referral.referrer_id
                        ).first()

                        if referrer_credit:
                            referrer_credit.balance += 10
                            trans = CreditTransaction(
                                user_id=referral.referrer_id,
                                amount=10,
                                description="Referral bonus (10 credits)",
                                transaction_type="bonus",
                                reference=str(uuid.uuid4()),
                            )
                            db.session.add(trans)

                        # Give 10 bonus to new user too (FIXED: 10, not 15)
                        credit.balance += 10
                        trans2 = CreditTransaction(
                            user_id=user.id,
                            amount=10,
                            description="Welcome + referral bonus (10 credits)",
                            transaction_type="bonus",
                            reference=str(uuid.uuid4()),
                        )
                        db.session.add(trans2)

                        current_app.logger.info(
                            f"Applied referral code: {referral_code} - both users got 10 credits"
                        )

        # Update last login info
        user.last_login = datetime.utcnow()
        user.last_ip = request.remote_addr
        user.login_count = (user.login_count or 0) + 1

        db.session.commit()

        # Invalidate cache
        cache.delete(f"user_{user.id}")
        cache.delete(f"user_data_{user.id}")

        # Get credit balance
        credit_balance = CreditBalance.query.filter_by(user_id=user.id).first()
        balance = credit_balance.balance if credit_balance else 10

        # Create JWT tokens with jti for blacklisting
        access_token = create_access_token(
            identity=str(user.id),
            additional_claims={"email": user.email, "type": "access"},
            expires_delta=timedelta(minutes=15),
        )

        refresh_token = create_refresh_token(
            identity=str(user.id),
            additional_claims={"type": "refresh"},
            expires_delta=timedelta(days=7),
        )

        # Track login event
        event = UserEvent(
            user_id=user.id,
            event_type="login",
            page="google_auth",
            ip_address=request.remote_addr,
        )
        db.session.add(event)
        db.session.commit()

        current_app.logger.info(f"User logged in successfully: {user.email}")

        return (
            jsonify(
                {
                    "success": True,
                    "access_token": access_token,
                    "refresh_token": refresh_token,
                    "is_new_user": is_new_user,
                    "user": {
                        "id": user.id,
                        "email": user.email,
                        "full_name": user.full_name,
                        "profile_picture": user.profile_picture,
                        "phone": user.phone,
                        "date_of_birth": (
                            user.date_of_birth.isoformat()
                            if user.date_of_birth
                            else None
                        ),
                        "occupation": user.occupation,
                        "state_of_origin": user.state_of_origin,
                        "state_of_residence": user.state_of_residence,
                        "email_verified": user.email_verified,
                        "credit_balance": balance,
                        "created_at": (
                            user.created_at.isoformat() if user.created_at else None
                        ),
                    },
                }
            ),
            200,
        )

    except Exception as e:
        db.session.rollback()
        current_app.logger.error(f"Google auth error: {str(e)}")
        current_app.logger.error(traceback.format_exc())
        return jsonify({"error": f"Internal server error: {str(e)}"}), 500


@bp.route("/refresh", methods=["POST"])
@limiter.limit("10 per minute")
def refresh_token():
    """Refresh access token using refresh token"""
    try:
        auth_header = request.headers.get("Authorization", "")
        if not auth_header.startswith("Bearer "):
            return jsonify({"error": "Invalid authorization header"}), 401

        token = auth_header.replace("Bearer ", "")

        # Decode and verify refresh token
        try:
            decoded = decode_token(token)
            user_id = decoded["sub"]
            token_type = decoded.get("type", "")
            jti = decoded.get("jti")

            if token_type != "refresh":
                return jsonify({"error": "Invalid token type"}), 401

            # Check if token is blacklisted
            if jti:
                token_hash = hashlib.sha256(jti.encode()).hexdigest()
                blacklisted = TokenBlacklist.query.filter_by(
                    token_hash=token_hash
                ).first()
                if blacklisted:
                    return jsonify({"error": "Token has been revoked"}), 401

        except Exception as e:
            return jsonify({"error": "Invalid or expired token"}), 401

        # Get user
        user = db.session.get(User, user_id)
        if not user or not user.is_active:
            return jsonify({"error": "User not found or inactive"}), 401

        # Create new access token
        access_token = create_access_token(
            identity=str(user.id),
            additional_claims={"email": user.email, "type": "access"},
            expires_delta=timedelta(minutes=15),
        )

        return jsonify({"success": True, "access_token": access_token}), 200

    except Exception as e:
        current_app.logger.error(f"Token refresh error: {str(e)}")
        return jsonify({"error": "Failed to refresh token"}), 500


@bp.route("/logout", methods=["POST"])
@token_required
def logout():
    """Logout user and blacklist token"""
    try:
        user = get_current_user()

        if not user:
            current_app.logger.error("Logout attempted with no user")
            return jsonify({"error": "User not found"}), 401

        # Get token jti from JWT
        jwt_data = get_jwt()
        jti = jwt_data.get("jti")

        if jti:
            # Blacklist the token
            token_hash = hashlib.sha256(jti.encode()).hexdigest()
            expires_at = datetime.utcnow() + timedelta(days=1)

            blacklisted = TokenBlacklist(token_hash=token_hash, expires_at=expires_at)
            db.session.add(blacklisted)

        # Track logout event
        event = UserEvent(
            user_id=user.id,
            event_type="logout",
            page="auth",
            ip_address=request.remote_addr,
        )
        db.session.add(event)
        db.session.commit()

        # Invalidate cache
        cache.delete(f"user_{user.id}")
        cache.delete(f"user_data_{user.id}")

        current_app.logger.info(f"User logged out: {user.email}")

        return jsonify({"success": True}), 200

    except Exception as e:
        db.session.rollback()
        current_app.logger.error(f"Logout error: {str(e)}")
        return jsonify({"error": "Failed to logout"}), 500


@bp.route("/me", methods=["GET"])  # FIXED: Renamed function to avoid conflict
@token_required
def get_user_profile():
    """Get current authenticated user info"""
    try:
        user = get_current_user()

        if not user:
            current_app.logger.error("/me endpoint called with no user")
            return jsonify({"error": "User not found"}), 401

        # Try to get from cache first
        cache_key = f"user_data_{user.id}"
        user_data = cache.get(cache_key)

        if not user_data:
            # Get credit balance
            credit = CreditBalance.query.filter_by(user_id=user.id).first()
            badge_count = Badge.query.filter_by(user_id=user.id).count()

            user_dict = user.to_dict()
            user_dict["credit_balance"] = credit.balance if credit else 0
            user_dict["badge_count"] = badge_count

            # Cache for 5 minutes
            cache.set(cache_key, user_dict, timeout=300)
            user_data = user_dict

        return jsonify({"success": True, "user": user_data}), 200

    except Exception as e:
        current_app.logger.error(f"Get user error: {str(e)}")
        import traceback

        traceback.print_exc()
        return jsonify({"error": "Failed to get user info"}), 500


@bp.route("/profile", methods=["PUT"])
@token_required
@limiter.limit("10 per minute")
def update_profile():
    """Update user profile information"""
    try:
        user = get_current_user()

        if not user:
            current_app.logger.error("Profile update attempted with no user")
            return jsonify({"error": "User not found"}), 401

        data = request.get_json() or {}

        # Update only allowed fields
        allowed_fields = [
            "full_name",
            "phone",
            "date_of_birth",
            "occupation",
            "state_of_origin",
            "state_of_residence",
        ]

        for field in allowed_fields:
            if field in data:
                value = data[field]

                # Basic validation
                if field == "phone" and value:
                    # Remove non-digits and validate length
                    cleaned = "".join(filter(str.isdigit, value))
                    if len(cleaned) < 10:
                        return jsonify({"error": "Invalid phone number"}), 400
                    setattr(user, field, cleaned)

                elif field == "date_of_birth" and value:
                    try:
                        # Parse date string to date object
                        if isinstance(value, str):
                            user.date_of_birth = datetime.strptime(
                                value, "%Y-%m-%d"
                            ).date()
                        else:
                            user.date_of_birth = value
                    except ValueError as e:
                        current_app.logger.error(f"Date parsing error: {str(e)}")
                        return (
                            jsonify({"error": "Invalid date format. Use YYYY-MM-DD"}),
                            400,
                        )

                elif value:  # For other fields, just set if not empty
                    setattr(
                        user, field, value.strip() if isinstance(value, str) else value
                    )

        db.session.commit()

        # Invalidate caches
        cache.delete(f"user_{user.id}")
        cache.delete(f"user_data_{user.id}")

        # Get updated data
        credit = CreditBalance.query.filter_by(user_id=user.id).first()
        user_dict = user.to_dict()
        user_dict["credit_balance"] = credit.balance if credit else 0

        return jsonify({"success": True, "user": user_dict}), 200

    except Exception as e:
        db.session.rollback()
        current_app.logger.error(f"Profile update error: {str(e)}")
        current_app.logger.error(traceback.format_exc())
        return jsonify({"error": f"Failed to update profile: {str(e)}"}), 500


@bp.route("/delete", methods=["DELETE"])
@token_required
def delete_account():
    """Delete user account (GDPR compliance)"""
    try:
        user = get_current_user()

        if not user:
            current_app.logger.error("Account deletion attempted with no user")
            return jsonify({"error": "User not found"}), 401

        # Anonymize user data instead of hard delete
        user.email = f"deleted_{user.id}@example.com"
        user.google_id = None
        user.full_name = "Deleted User"
        user.phone = None
        user.date_of_birth = None
        user.occupation = None
        user.state_of_origin = None
        user.state_of_residence = None
        user.profile_picture = None
        user.is_active = False
        user.deleted_at = datetime.utcnow()

        db.session.commit()

        # Invalidate caches
        cache.delete(f"user_{user.id}")
        cache.delete(f"user_data_{user.id}")

        current_app.logger.info(f"User deleted account: ID {user.id}")

        return (
            jsonify({"success": True, "message": "Account deleted successfully"}),
            200,
        )

    except Exception as e:
        db.session.rollback()
        current_app.logger.error(f"Account deletion error: {str(e)}")
        return jsonify({"error": "Failed to delete account"}), 500
