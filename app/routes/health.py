# backend/app/routes/health.py
from flask import Blueprint, jsonify
from datetime import datetime  # Add this import

bp = Blueprint("health", __name__, url_prefix="/")


@bp.route("/health", methods=["GET"])
def health_check():
    """Health check endpoint"""
    return (
        jsonify(
            {
                "status": "healthy",
                "service": "Zero Mumu Tax API",
                "version": "NTA 2025",
                "timestamp": datetime.utcnow().isoformat(),
            }
        ),
        200,
    )
