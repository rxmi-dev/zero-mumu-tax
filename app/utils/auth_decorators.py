# app/utils/auth_decorators.py
from functools import wraps
from flask import request, jsonify, g
from flask_jwt_extended import verify_jwt_in_request, get_jwt_identity, get_jwt
from app.models.user import User
from app.models.token import TokenBlacklist
import logging
import hashlib
from datetime import datetime

logger = logging.getLogger(__name__)


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        try:
            # Verify JWT in request
            verify_jwt_in_request()
            user_id = get_jwt_identity()

            # Get JWT for blacklist check
            jwt_data = get_jwt()
            jti = jwt_data.get("jti")

            if jti:
                # Check if token is blacklisted
                token_hash = hashlib.sha256(jti.encode()).hexdigest()
                blacklisted = TokenBlacklist.query.filter_by(
                    token_hash=token_hash
                ).first()
                if blacklisted:
                    logger.warning(f"Blacklisted token used: {token_hash[:10]}...")
                    return jsonify({"error": "Token has been revoked"}), 401

            # Convert to int if string
            if isinstance(user_id, str):
                try:
                    user_id = int(user_id)
                except ValueError:
                    logger.error(f"Invalid user_id format: {user_id}")
                    return jsonify({"error": "Invalid token"}), 401

            # Fetch user using a simple query
            user = User.query.get(user_id)

            if not user:
                logger.error(f"User not found for id {user_id}")
                return jsonify({"error": "User not found"}), 401

            if not user.is_active:
                logger.error(f"User {user_id} is inactive")
                return jsonify({"error": "Account is inactive"}), 401

            # Verify we got a User instance
            if not isinstance(user, User):
                logger.error(f"Expected User, got {type(user)}")
                return jsonify({"error": "Authentication error"}), 500

            g.current_user = user
            # Return the decorated function result
            return f(*args, **kwargs)

        except Exception as e:
            logger.error(f"token_required error: {str(e)}")
            return jsonify({"error": "Invalid or expired token"}), 401

    return decorated


def get_current_user():
    """Get current user from request context"""
    return getattr(g, "current_user", None)


def get_current_user_from_token():
    """Helper to get user from token without decorator"""
    auth_header = request.headers.get("Authorization", "")
    if not auth_header or not auth_header.startswith("Bearer "):
        return None

    token = auth_header.replace("Bearer ", "")
    try:
        from flask_jwt_extended import decode_token

        decoded = decode_token(token)
        user_id = decoded["sub"]
        jti = decoded.get("jti")

        # Check if token is blacklisted
        if jti:
            token_hash = hashlib.sha256(jti.encode()).hexdigest()
            blacklisted = TokenBlacklist.query.filter_by(token_hash=token_hash).first()
            if blacklisted:
                logger.warning(
                    f"Blacklisted token used in helper: {token_hash[:10]}..."
                )
                return None

        if isinstance(user_id, str):
            try:
                user_id = int(user_id)
            except ValueError:
                return None

        return User.query.get(user_id)
    except Exception as e:
        logger.error(f"get_current_user_from_token error: {str(e)}")
        return None
