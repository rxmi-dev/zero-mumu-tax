# backend-new/app/routes/stats.py
from flask import Blueprint, request, jsonify
from app.extensions import db
from app.utils.auth_decorators import get_current_user_from_token
from app.models.calculation import Calculation
from app.models.user import User
from app.models.optimization import OptimizationTip
from app.models.social import SocialProofStats

bp = Blueprint("stats", __name__, url_prefix="/api/stats")


@bp.route("/user-impact", methods=["GET"])
def get_user_impact_stats():
    user = get_current_user_from_token()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        calc_count = Calculation.query.filter_by(user_id=user.id).count()

        total_savings = (
            db.session.query(db.func.sum(OptimizationTip.potential_savings))
            .filter_by(user_id=user.id)
            .scalar()
            or 0
        )

        higher_savings_count = (
            db.session.query(db.func.count(OptimizationTip.user_id.distinct()))
            .filter(OptimizationTip.potential_savings > total_savings)
            .scalar()
            or 0
        )

        total_users = User.query.count()
        rank_percentile = (
            100 - (higher_savings_count / total_users * 100) if total_users > 0 else 100
        )

        return (
            jsonify(
                {
                    "success": True,
                    "stats": {
                        "calculation_count": calc_count,
                        "total_savings": total_savings,
                        "rank_percentile": round(rank_percentile, 1),
                        "better_than": f"Better than {round(rank_percentile, 1)}% of users",
                    },
                }
            ),
            200,
        )

    except Exception as e:
        return jsonify({"error": str(e)}), 401


@bp.route("/social-proof", methods=["GET"])
def get_social_proof_stats():
    stats = SocialProofStats.query.first()
    if not stats:
        return (
            jsonify(
                {
                    "total_users": 0,
                    "total_calculations": 0,
                    "total_savings": 0,
                    "monthly_active": 0,
                }
            ),
            200,
        )

    return (
        jsonify(
            {
                "total_users": stats.total_users,
                "total_calculations": stats.total_calculations,
                "total_savings": stats.total_savings,
                "monthly_active": stats.monthly_active,
                "formatted": {
                    "users": f"{stats.total_users:,}",
                    "savings": f"₦{stats.total_savings:,.0f}",
                },
            }
        ),
        200,
    )
