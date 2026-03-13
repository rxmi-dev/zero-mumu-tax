# backend-new/app/routes/rent.py
from flask import Blueprint, request, jsonify

bp = Blueprint("rent", __name__, url_prefix="/api/v1/calculate")


def calculate_rent_relief(data):
    """Calculate Rent Relief"""
    try:
        rent = float(data.get("rent", 0) or 0)
        relief = min(rent * 0.20, 500000)
        return {
            "success": True,
            "data": {
                "rent": rent,
                "relief": relief,
                "max_relief": 500000,
                "is_capped": rent * 0.20 > 500000,
            },
        }
    except Exception as e:
        return {"success": False, "error": str(e)}


@bp.route("/rent", methods=["POST", "OPTIONS"])
def rent_calc():
    if request.method == "OPTIONS":
        return "", 200
    try:
        data = request.get_json()
        result = calculate_rent_relief(data)
        if result["success"]:
            return jsonify(result), 200
        return jsonify(result), 400
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500
