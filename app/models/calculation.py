from app.extensions import db
from datetime import datetime


class Calculation(db.Model):
    __tablename__ = "calculations"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    calculator_type = db.Column(db.String(20), nullable=False)
    input_data = db.Column(db.JSON, nullable=False)
    result_data = db.Column(db.JSON, nullable=False)
    tax_year = db.Column(db.Integer, default=2026)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    is_saved = db.Column(db.Boolean, default=True)
    is_comparison = db.Column(db.Boolean, default=False)
    comparison_group = db.Column(db.String(50), nullable=True)
