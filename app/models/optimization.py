# backend-new/app/models/optimization.py
from app.extensions import db
from datetime import datetime


class OptimizationTip(db.Model):
    __tablename__ = "optimization_tips"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    calculation_id = db.Column(
        db.Integer, db.ForeignKey("calculations.id"), nullable=True
    )
    tip_type = db.Column(db.String(50))  # pension, rent, nhis, nhf, insurance
    title = db.Column(db.String(200))
    description = db.Column(db.Text)
    potential_savings = db.Column(db.Float, default=0)
    implemented = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "tip_type": self.tip_type,
            "title": self.title,
            "description": self.description,
            "potential_savings": self.potential_savings,
            "implemented": self.implemented,
            "created_at": self.created_at.isoformat() if self.created_at else None,
        }
