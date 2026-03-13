# app/models/referral.py
from app.extensions import db
from datetime import datetime


class Referral(db.Model):
    __tablename__ = "referrals"

    id = db.Column(db.Integer, primary_key=True)
    referrer_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    referred_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=True)
    referral_code = db.Column(db.String(20), unique=True, nullable=False)
    used = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    used_at = db.Column(db.DateTime, nullable=True)

    # SIMPLE relationships - let SQLAlchemy handle it automatically
    # No backrefs, no back_populates - just simple foreign key relationships
    referrer = db.relationship("User", foreign_keys=[referrer_id])
    referred = db.relationship("User", foreign_keys=[referred_id])

    def __repr__(self):
        return f"<Referral {self.referral_code}>"
