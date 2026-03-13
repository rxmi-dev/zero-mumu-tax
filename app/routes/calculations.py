# backend/app/routes/calculations.py
from flask import Blueprint, request, jsonify
from datetime import datetime
import uuid  # ADD THIS IMPORT
from app.extensions import db
from app.utils.auth_decorators import get_current_user_from_token
from app.models.calculation import Calculation
from app.models.credit import CreditBalance, CreditTransaction
from app.models.event import UserEvent

bp = Blueprint("calculations", __name__, url_prefix="/api/calculations")


@bp.route("/save", methods=["POST", "OPTIONS"])
def save_calculation():
    if request.method == "OPTIONS":
        return "", 200

    user = get_current_user_from_token()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        data = request.get_json()
        
        # Different credit costs for different calculation types
        calculator_type = data.get("calculator_type", "")
        
        # Daily entries cost 2 credits (with explanation)
        # Regular calculations cost 1 credit
        if calculator_type == "daily":
            credit_cost = 2
            description = f"Saved daily entry - Track your daily profit and estimate annual tax"
        else:
            credit_cost = 1
            description = f"Saved {calculator_type} calculation"

        credit = CreditBalance.query.filter_by(user_id=user.id).first()
        if not credit or credit.balance < credit_cost:
            return jsonify({"error": f"Insufficient credits. Need {credit_cost} credits."}), 400

        credit.balance -= credit_cost
        calc = Calculation(
            user_id=user.id,
            calculator_type=calculator_type,
            input_data=data["input_data"],
            result_data=data["result_data"],
            tax_year=data.get("tax_year", datetime.utcnow().year),
        )
        db.session.add(calc)
        db.session.add(
            CreditTransaction(
                user_id=user.id,
                amount=-credit_cost,
                description=description,
                transaction_type="spend",
                reference=str(uuid.uuid4())
            )
        )
        db.session.commit()

        # Return success with message about benefits for daily entries
        message = None
        if calculator_type == "daily":
            message = "✅ Daily entry saved! This data will be used in your annual PIT/CIT calculations. Track daily to get accurate tax estimates."

        return (
            jsonify(
                {
                    "success": True,
                    "calculation_id": calc.id,
                    "new_balance": credit.balance,
                    "message": message
                }
            ),
            201,
        )

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@bp.route("/", methods=["GET"])
def get_calculations():
    user = get_current_user_from_token()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        calcs = (
            Calculation.query.filter_by(user_id=user.id, is_saved=True)
            .order_by(Calculation.created_at.desc())
            .all()
        )

        return (
            jsonify(
                {
                    "success": True,
                    "calculations": [
                        {
                            "id": c.id,
                            "calculator_type": c.calculator_type,
                            "input_data": c.input_data,
                            "result_data": c.result_data,
                            "tax_year": c.tax_year,
                            "created_at": c.created_at.isoformat(),
                        }
                        for c in calcs
                    ],
                }
            ),
            200,
        )
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@bp.route("/<int:calc_id>", methods=["DELETE"])
def delete_calculation(calc_id):
    user = get_current_user_from_token()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        calc = Calculation.query.filter_by(id=calc_id, user_id=user.id).first()
        if not calc:
            return jsonify({"error": "Not found"}), 404
        db.session.delete(calc)
        db.session.commit()
        return jsonify({"success": True}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@bp.route("/compare", methods=["POST", "OPTIONS"])
def create_comparison():
    if request.method == "OPTIONS":
        return "", 200

    user = get_current_user_from_token()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        data = request.get_json()
        scenarios = data.get("scenarios", [])
        calculator_type = data.get("calculator_type", "pit")

        if len(scenarios) != 2:
            return jsonify({"error": "Need exactly 2 scenarios"}), 400

        credit = CreditBalance.query.filter_by(user_id=user.id).first()
        if not credit or credit.balance < 2:
            return jsonify({"error": "Need 2 credits for comparison"}), 400

        from app.services.tax_calculations import calculate_pit, calculate_cit

        group_id = str(uuid.uuid4())
        results = []

        for i, scenario in enumerate(scenarios):
            if calculator_type == "pit":
                result = calculate_pit(scenario)
            elif calculator_type == "cit":
                result = calculate_cit(scenario)
            else:
                continue

            if not result["success"]:
                return jsonify({"error": f"Scenario {i+1} calculation failed"}), 400

            calc = Calculation(
                user_id=user.id,
                calculator_type=calculator_type,
                input_data=scenario,
                result_data=result["data"],
                is_comparison=True,
                comparison_group=group_id,
            )
            db.session.add(calc)
            results.append({"id": calc.id, "input": scenario, "result": result["data"]})

        credit.balance -= 2
        db.session.commit()

        return (
            jsonify(
                {
                    "success": True,
                    "comparison_group": group_id,
                    "calculations": results,
                    "new_balance": credit.balance,
                }
            ),
            201,
        )

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500