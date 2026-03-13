# backend/app/models/__init__.py
from app.models.user import User
from app.models.calculation import Calculation
from app.models.credit import CreditBalance, CreditTransaction
from app.models.referral import Referral
from app.models.badge import Badge
from app.models.tax_year import TaxYear
from app.models.optimization import OptimizationTip
from app.models.event import UserEvent, FeatureUsage
from app.models.bulk_upload import BulkUploadJob
from app.models.social import SocialProofStats
from app.models.verification import VerificationCode, PasswordResetToken
from app.models.daily_entry import DailyEntry
from app.models.token import TokenBlacklist

# Export all models for easy importing
__all__ = [
    "User",
    "Calculation",
    "CreditBalance",
    "CreditTransaction",
    "Referral",
    "Badge",
    "TaxYear",
    "OptimizationTip",
    "UserEvent",
    "FeatureUsage",
    "BulkUploadJob",
    "SocialProofStats",
    "VerificationCode",
    "PasswordResetToken",
    "DailyEntry",
    "TokenBlacklist",
]

# Function to create indexes (call this after db.create_all())
def create_indexes():
    """Create additional indexes for performance"""
    from app.extensions import db

    # Indexes are defined in model __table_args__ or via db.Index
    # This ensures they're created
    db.Index(
        "ix_calculations_user_id_created_at",
        Calculation.user_id,
        Calculation.created_at.desc(),
    )
    db.Index("ix_token_blacklist_expires_at", TokenBlacklist.expires_at)
    db.Index(
        "ix_user_events_user_id_created_at",
        UserEvent.user_id,
        UserEvent.created_at.desc(),
    )
