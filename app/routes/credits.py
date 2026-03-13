# backend-NL/app/routes/credits.py
from flask import Blueprint, request, jsonify
import uuid
from app.extensions import db
from app.utils.auth_decorators import get_current_user_from_token
from app.models.credit import CreditBalance, CreditTransaction
from app.models.event import UserEvent

bp = Blueprint("credits", __name__, url_prefix="/api/credits")


@bp.route("/purchase", methods=["POST", "OPTIONS"])
def purchase_credits():
    if request.method == "OPTIONS":
        return "", 200

    user = get_current_user_from_token()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        data = request.get_json()
        credits = data.get("credits")

        if not credits:
            return jsonify({"error": "Credits amount required"}), 400

        credit_balance = CreditBalance.query.filter_by(user_id=user.id).first()
        if not credit_balance:
            credit_balance = CreditBalance(user_id=user.id, balance=0)
            db.session.add(credit_balance)

        credit_balance.balance += credits

        transaction = CreditTransaction(
            user_id=user.id,
            amount=credits,
            description=f"Purchased {credits} credits",
            transaction_type="purchase",
            reference=str(uuid.uuid4()),
        )
        db.session.add(transaction)
        db.session.commit()

        event = UserEvent(
            user_id=user.id, event_type="purchase", credits_used=credits, page="credits"
        )
        db.session.add(event)
        db.session.commit()

        # Calculate price based on pack (simplified)
        price = 0
        if credits == 50:
            price = 750
        elif credits == 150:
            price = 2000
        elif credits == 500:
            price = 6000
        elif credits == 1000:
            price = 10000

        return (
            jsonify(
                {
                    "success": True,
                    "new_balance": credit_balance.balance,
                    "message": f"{credits} credits added successfully",
                    "price": price,
                }
            ),
            200,
        )

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@bp.route("/history", methods=["GET"])
def get_credit_history():
    user = get_current_user_from_token()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        transactions = (
            CreditTransaction.query.filter_by(user_id=user.id)
            .order_by(CreditTransaction.created_at.desc())
            .limit(20)
            .all()
        )

        history = []
        for t in transactions:
            # Map price based on amount (simplified)
            price = None
            if t.amount == 50:
                price = 750
            elif t.amount == 150:
                price = 2000
            elif t.amount == 500:
                price = 6000
            elif t.amount == 1000:
                price = 10000

            history.append(
                {
                    "date": t.created_at.isoformat(),
                    "description": t.description,
                    "amount": t.amount,
                    "type": t.transaction_type,
                    "price": price,
                }
            )

        return jsonify({"success": True, "history": history}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
