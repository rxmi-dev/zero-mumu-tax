# backend/app/models/daily_entry.py
from app.extensions import db
from datetime import datetime, date


class DailyEntry(db.Model):
    __tablename__ = "daily_entries"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    entry_date = db.Column(
        db.Date, nullable=False, default=date.today
    )  # FIXED: Changed from String to Date
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(
        db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow
    )

    # Income
    sales = db.Column(db.Float, default=0)
    other_income = db.Column(db.Float, default=0)

    # Expenses
    cost_of_goods = db.Column(db.Float, default=0)
    transport = db.Column(db.Float, default=0)
    rent = db.Column(db.Float, default=0)
    wages = db.Column(db.Float, default=0)
    utilities = db.Column(db.Float, default=0)
    ajo = db.Column(db.Float, default=0)
    other_expenses = db.Column(db.Float, default=0)
    personal_expenses = db.Column(db.Float, default=0)

    # Calculated fields
    total_income = db.Column(db.Float, default=0)
    total_business_expenses = db.Column(db.Float, default=0)
    profit = db.Column(db.Float, default=0)
    estimated_tax = db.Column(db.Float, default=0)

    __table_args__ = (
        db.UniqueConstraint("user_id", "entry_date", name="unique_user_date"),
    )

    def to_dict(self):
        return {
            "id": self.id,
            "date": (
                self.entry_date.isoformat() if self.entry_date else None
            ),  # FIXED: Convert date to string
            "sales": self.sales,
            "other_income": self.other_income,
            "cost_of_goods": self.cost_of_goods,
            "transport": self.transport,
            "rent": self.rent,
            "wages": self.wages,
            "utilities": self.utilities,
            "ajo": self.ajo,
            "other_expenses": self.other_expenses,
            "personal_expenses": self.personal_expenses,
            "total_income": self.total_income,
            "total_business_expenses": self.total_business_expenses,
            "profit": self.profit,
            "estimated_tax": self.estimated_tax,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
        }
