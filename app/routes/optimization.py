# backend/app/routes/optimization.py
from flask import Blueprint, request, jsonify
from datetime import datetime
from app.extensions import db
from app.utils.auth_decorators import token_required, get_current_user
from app.models.optimization import OptimizationTip
from app.models.credit import CreditBalance, CreditTransaction
from app.models.calculation import Calculation
import uuid
import random

bp = Blueprint("optimization", __name__, url_prefix="/api/optimization-tips")


@bp.route("/", methods=["GET"])
@token_required
def get_optimization_tips():
    """Get personalized tax optimization tips"""
    user = get_current_user()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        # Check credit balance
        credit = CreditBalance.query.filter_by(user_id=user.id).first()
        if not credit or credit.balance < 3:
            return jsonify({"error": "Insufficient credits. Need 3 credits for tax optimization tips."}), 400

        # Get user's calculations to personalize tips
        calculations = Calculation.query.filter_by(user_id=user.id).order_by(Calculation.created_at.desc()).limit(10).all()
        
        tips = []
        
        # Analyze user's data to generate personalized tips
        has_rent = False
        has_pension = False
        has_business = False
        total_income = 0
        
        for calc in calculations:
            if calc.calculator_type == 'pit':
                input_data = calc.input_data or {}
                if input_data.get('rent_paid'):
                    has_rent = True
                if input_data.get('pension_rsa'):
                    has_pension = True
                total_income += calc.result_data.get('total_income', 0) if calc.result_data else 0
            elif calc.calculator_type == 'cit':
                has_business = True

        # Generate relevant tips
        if not has_rent and total_income > 0:
            tips.append({
                "type": "rent_relief",
                "title": "Claim Rent Relief",
                "description": "You can deduct up to ₦500,000 of your rent from taxable income. This could save you up to ₦125,000 in tax.",
                "potential_savings": 125000,
                "action": "Add rent paid to your profile"
            })

        if not has_pension and total_income > 0:
            tips.append({
                "type": "pension",
                "title": "Maximize Pension Contributions",
                "description": "RSA pension contributions are tax-deductible up to 8% of your income. This reduces your taxable income dollar-for-dollar.",
                "potential_savings": total_income * 0.08 * 0.2,
                "action": "Set up or increase RSA contributions"
            })

        if has_business:
            tips.append({
                "type": "business_expenses",
                "title": "Track All Business Expenses",
                "description": "Many business owners miss deductible expenses like transport, utilities, and office supplies. Track daily to maximize deductions.",
                "potential_savings": 50000,
                "action": "Use daily tracking feature"
            })

        # Always include general tips
        general_tips = [
            {
                "type": "nhis",
                "title": "NHIS Contributions",
                "description": "NHIS premiums up to 5% of your salary are tax-deductible. Check if you're maximizing this benefit.",
                "potential_savings": 30000,
                "action": "Review your NHIS contributions"
            },
            {
                "type": "nhf",
                "title": "NHF Contributions",
                "description": "NHF contributions up to 2.5% of your salary are tax-deductible. This is often overlooked.",
                "potential_savings": 15000,
                "action": "Check your NHF deductions"
            },
            {
                "type": "filing",
                "title": "File Early",
                "description": "Filing your taxes early helps you plan and avoid last-minute stress. Deadline is March 31st.",
                "potential_savings": 0,
                "action": "Start preparing your documents now"
            }
        ]

        # Add 2-3 general tips
        tips.extend(random.sample(general_tips, min(3, len(general_tips))))

        # Deduct credits
        credit.balance -= 3
        transaction = CreditTransaction(
            user_id=user.id,
            amount=-3,
            description="Tax optimization tips",
            transaction_type="spend",
            reference=str(uuid.uuid4())
        )
        db.session.add(transaction)

        # Save tips to database for history
        for tip_data in tips[:3]:  # Save first 3 tips
            tip = OptimizationTip(
                user_id=user.id,
                tip_type=tip_data["type"],
                title=tip_data["title"],
                description=tip_data["description"],
                potential_savings=tip_data["potential_savings"],
                implemented=False
            )
            db.session.add(tip)

        db.session.commit()

        return jsonify({
            "success": True,
            "tips": tips,
            "new_balance": credit.balance
        }), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@bp.route("/<int:tip_id>/implement", methods=["POST"])
@token_required
def mark_implemented(tip_id):
    """Mark a tip as implemented"""
    user = get_current_user()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        tip = OptimizationTip.query.filter_by(id=tip_id, user_id=user.id).first()
        if not tip:
            return jsonify({"error": "Tip not found"}), 404

        tip.implemented = True
        db.session.commit()

        return jsonify({
            "success": True,
            "message": "Tip marked as implemented"
        }), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500