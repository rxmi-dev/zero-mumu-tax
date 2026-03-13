# backend/app/models/tax_year.py
from app.extensions import db
from datetime import datetime


class TaxYear(db.Model):
    __tablename__ = "tax_years"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    total_income = db.Column(db.Float, default=0)
    total_tax_paid = db.Column(db.Float, default=0)
    effective_rate = db.Column(db.Float, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(
        db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow
    )

    __table_args__ = (db.UniqueConstraint("user_id", "year", name="unique_user_year"),)

    def to_dict(self):
        return {
            "id": self.id,
            "year": self.year,
            "total_income": self.total_income,
            "total_tax_paid": self.total_tax_paid,
            "effective_rate": self.effective_rate,
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
        }
