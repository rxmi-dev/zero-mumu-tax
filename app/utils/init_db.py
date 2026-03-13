from app.extensions import db
from app.models.social import SocialProofStats


def init_social_proof_stats():
    """Initialize social proof stats if not exists"""
    try:
        # Try to query first - if table doesn't exist, this will fail
        stats = SocialProofStats.query.first()
        if not stats:
            stats = SocialProofStats(
                total_users=0, total_calculations=0, total_savings=0, monthly_active=0
            )
            db.session.add(stats)
            db.session.commit()
            print("✅ Social proof stats initialized")
    except Exception as e:
        # If table doesn't exist, create it and then add stats
        print("⚠️ Social proof stats table not found, creating...")
        db.create_all()
        stats = SocialProofStats(
            total_users=0, total_calculations=0, total_savings=0, monthly_active=0
        )
        db.session.add(stats)
        db.session.commit()
        print("✅ Social proof stats created and initialized")
