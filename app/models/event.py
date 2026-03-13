# backend-new/app/models/event.py
from app.extensions import db
from datetime import datetime


class UserEvent(db.Model):
    __tablename__ = "user_events"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=True)
    event_type = db.Column(db.String(50))  # login, signup, calculation, save, purchase
    calculator_type = db.Column(db.String(20), nullable=True)
    credits_used = db.Column(db.Integer, default=0)
    page = db.Column(db.String(50))
    user_agent = db.Column(db.String(200))
    ip_address = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "event_type": self.event_type,
            "calculator_type": self.calculator_type,
            "credits_used": self.credits_used,
            "page": self.page,
            "created_at": self.created_at.isoformat() if self.created_at else None,
        }


class FeatureUsage(db.Model):
    __tablename__ = "feature_usage"

    id = db.Column(db.Integer, primary_key=True)
    feature_name = db.Column(db.String(50))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=True)
    credits_spent = db.Column(db.Integer, default=0)
    session_id = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "feature_name": self.feature_name,
            "credits_spent": self.credits_spent,
            "created_at": self.created_at.isoformat() if self.created_at else None,
        }
