from app.extensions import db
from datetime import datetime


class SocialProofStats(db.Model):
    __tablename__ = "social_proof_stats"

    id = db.Column(db.Integer, primary_key=True)
    total_users = db.Column(db.Integer, default=0)
    total_calculations = db.Column(db.Integer, default=0)
    total_savings = db.Column(db.Float, default=0)
    monthly_active = db.Column(db.Integer, default=0)
    updated_at = db.Column(
        db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow
    )
