from flask import Blueprint, request, jsonify
from app.services.tax_calculations import calculate_pit

bp = Blueprint("pit", __name__, url_prefix="/api/v1/calculate")


@bp.route("/pit", methods=["POST", "OPTIONS"])
def pit_calc():
    if request.method == "OPTIONS":
        return "", 200
    try:
        data = request.get_json()
        result = calculate_pit(data)
        if result["success"]:
            return jsonify(result), 200
        return jsonify(result), 400
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500
