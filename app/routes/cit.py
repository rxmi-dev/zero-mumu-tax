# backend-new/app/routes/cit.py
from flask import Blueprint, request, jsonify
from app.services.tax_calculations import calculate_cit

bp = Blueprint("cit", __name__, url_prefix="/api/v1/calculate")


@bp.route("/cit", methods=["POST", "OPTIONS"])
def cit_calc():
    if request.method == "OPTIONS":
        return "", 200
    try:
        data = request.get_json()
        result = calculate_cit(data)
        if result["success"]:
            return jsonify(result), 200
        return jsonify(result), 400
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500
