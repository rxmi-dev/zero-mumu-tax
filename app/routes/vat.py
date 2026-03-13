# backend-new/app/routes/vat.py
from flask import Blueprint, request, jsonify

bp = Blueprint("vat", __name__, url_prefix="/api/v1/calculate")


def calculate_vat(data):
    """Calculate Value Added Tax"""
    try:
        amount = float(data.get("amount", 0) or 0)
        calc_type = data.get("calc_type", "net_to_gross")
        vat_rate = 0.075

        if calc_type == "net_to_gross":
            vat = amount * vat_rate
            gross = amount + vat
            return {
                "success": True,
                "data": {"vat": vat, "gross": gross, "net": amount},
            }
        else:
            net = amount / (1 + vat_rate)
            vat = amount - net
            return {"success": True, "data": {"vat": vat, "gross": amount, "net": net}}
    except Exception as e:
        return {"success": False, "error": str(e)}


@bp.route("/vat", methods=["POST", "OPTIONS"])
def vat_calc():
    if request.method == "OPTIONS":
        return "", 200
    try:
        data = request.get_json()
        result = calculate_vat(data)
        if result["success"]:
            return jsonify(result), 200
        return jsonify(result), 400
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500
