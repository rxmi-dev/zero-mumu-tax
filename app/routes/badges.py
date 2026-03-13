# backend-new/app/routes/badges.py
from flask import Blueprint, jsonify
from app.extensions import db
from app.utils.auth_decorators import get_current_user_from_token
from app.models.badge import Badge

bp = Blueprint("badges", __name__, url_prefix="/api/badges")


@bp.route("/", methods=["GET"])
def get_user_badges():
    user = get_current_user_from_token()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        badges = (
            Badge.query.filter_by(user_id=user.id)
            .order_by(Badge.awarded_at.desc())
            .all()
        )

        return (
            jsonify(
                {
                    "success": True,
                    "badges": [
                        {
                            "name": b.name,
                            "description": b.description,
                            "icon": b.icon,
                            "awarded_at": b.awarded_at.isoformat(),
                        }
                        for b in badges
                    ],
                }
            ),
            200,
        )

    except Exception as e:
        return jsonify({"error": str(e)}), 401


@bp.route("/all", methods=["GET"])
def get_all_badges():
    all_badges = [
        {
            "name": "Getting Started",
            "description": "Complete your first calculation",
            "icon": "🌱",
            "how_to_earn": "Use any calculator and save your result",
        },
        {
            "name": "Tax Enthusiast",
            "description": "Complete 10 calculations",
            "icon": "📊",
            "how_to_earn": "Save 10 different calculations",
        },
        {
            "name": "Tax Expert",
            "description": "Complete 50 calculations",
            "icon": "🏆",
            "how_to_earn": "Save 50 calculations",
        },
        {
            "name": "Community Builder",
            "description": "Refer 5 friends",
            "icon": "👥",
            "how_to_earn": "Share your referral link and have friends sign up",
        },
        {
            "name": "Early Adopter",
            "description": "Join in the first year",
            "icon": "⭐",
            "how_to_earn": "Sign up before January 1, 2026",
        },
    ]

    return jsonify({"success": True, "badges": all_badges}), 200
