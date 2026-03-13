# backend/app/routes/referral.py
from flask import Blueprint, request, jsonify
import hashlib
import uuid
import base64
from datetime import datetime
from app.extensions import db
from app.utils.auth_decorators import token_required, get_current_user
from app.models.referral import Referral
from app.models.credit import CreditBalance, CreditTransaction

bp = Blueprint("referral", __name__, url_prefix="/api/referral")


@bp.route("/generate", methods=["POST", "OPTIONS"])
@token_required
def generate_referral():
    if request.method == "OPTIONS":
        return "", 200

    user = get_current_user()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        existing = Referral.query.filter_by(referrer_id=user.id, used=False).first()
        if existing:
            return jsonify({"success": True, "code": existing.referral_code}), 200

        code_raw = hashlib.md5(f"{user.id}-{uuid.uuid4()}".encode()).digest()
        code = base64.b32encode(code_raw)[:8].decode().upper()

        referral = Referral(referrer_id=user.id, referral_code=code, used=False)
        db.session.add(referral)
        db.session.commit()

        return jsonify({"success": True, "code": code}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@bp.route("/my-code", methods=["GET"])
@token_required
def get_my_referral_code():
    user = get_current_user()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        referral = Referral.query.filter_by(referrer_id=user.id).first()
        if not referral:
            return jsonify({"success": True, "code": None, "count": 0}), 200

        count = Referral.query.filter_by(referrer_id=user.id, used=True).count()

        return (
            jsonify(
                {
                    "success": True,
                    "code": referral.referral_code,
                    "count": count,
                    "credits_earned": count * 10,  # FIXED: 10 credits per referral
                }
            ),
            200,
        )

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@bp.route("/use", methods=["POST", "OPTIONS"])
def use_referral():
    if request.method == "OPTIONS":
        return "", 200

    try:
        data = request.get_json()
        code = data.get("code")
        new_user_id = data.get("user_id")

        if not code or not new_user_id:
            return jsonify({"error": "Code and user ID required"}), 400

        referral = Referral.query.filter_by(referral_code=code, used=False).first()
        if not referral:
            return jsonify({"error": "Invalid or expired referral code"}), 400

        referral.used = True
        referral.referred_id = new_user_id
        referral.used_at = datetime.utcnow()

        # Give 10 credits to referrer (FIXED: 10, not 15)
        referrer_credit = CreditBalance.query.filter_by(
            user_id=referral.referrer_id
        ).first()
        if referrer_credit:
            referrer_credit.balance += 10
            transaction = CreditTransaction(
                user_id=referral.referrer_id,
                amount=10,
                description="Referral bonus (10 credits)",
                transaction_type="bonus",
                reference=str(uuid.uuid4()),
            )
            db.session.add(transaction)

        # Give 10 credits to new user (FIXED: 10, not 15)
        new_user_credit = CreditBalance.query.filter_by(user_id=new_user_id).first()
        if new_user_credit:
            new_user_credit.balance += 10
            transaction2 = CreditTransaction(
                user_id=new_user_id,
                amount=10,
                description="Welcome bonus from referral (10 credits)",
                transaction_type="bonus",
                reference=str(uuid.uuid4()),
            )
            db.session.add(transaction2)

        db.session.commit()

        return (
            jsonify(
                {
                    "success": True,
                    "message": "Referral applied successfully! You both got 10 credits!",
                }
            ),
            200,
        )

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
