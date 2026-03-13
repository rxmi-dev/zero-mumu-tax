# backend-new/app/routes/wht.py
from flask import Blueprint, request, jsonify

bp = Blueprint("wht", __name__, url_prefix="/api/v1/calculate")


def calculate_wht(data):
    """Calculate Withholding Tax"""
    try:
        rates = {
            "company_to_company": {
                "contract": 0.05,
                "rent": 0.10,
                "interest": 0.10,
                "dividend": 0.10,
                "royalty": 0.10,
                "professional": 0.05,
            },
            "company_to_individual": {
                "contract": 0.05,
                "rent": 0.10,
                "interest": 0.10,
                "dividend": 0.10,
                "royalty": 0.10,
                "professional": 0.05,
            },
            "individual_to_company": {
                "contract": 0.05,
                "rent": 0.10,
                "interest": 0.10,
                "dividend": 0.10,
                "royalty": 0.10,
                "professional": 0.05,
            },
        }

        payer = data.get("payer_type", "company_to_company")
        transaction = data.get("transaction_type", "contract")
        amount = float(data.get("amount", 1000000) or 1000000)

        rate = rates.get(payer, rates["company_to_company"]).get(transaction, 0.05)
        wht = amount * rate

        return {
            "success": True,
            "data": {
                "rate": rate * 100,
                "wht": wht,
                "net": amount - wht,
                "amount": amount,
                "payer_type": payer,
                "transaction_type": transaction,
            },
        }
    except Exception as e:
        return {"success": False, "error": str(e)}


@bp.route("/wht", methods=["POST", "OPTIONS"])
def wht_calc():
    if request.method == "OPTIONS":
        return "", 200
    try:
        data = request.get_json()
        result = calculate_wht(data)
        if result["success"]:
            return jsonify(result), 200
        return jsonify(result), 400
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500
