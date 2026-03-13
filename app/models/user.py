# app/models/user.py
from app.extensions import db
from datetime import datetime


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    google_id = db.Column(db.String(100), unique=True, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False, index=True)
    full_name = db.Column(db.String(100), nullable=False)
    profile_picture = db.Column(db.String(500), nullable=True)

    # Contact
    phone = db.Column(db.String(15), nullable=True)
    phone_verified = db.Column(db.Boolean, default=False)
    email_verified = db.Column(db.Boolean, default=True)

    # Personal info
    date_of_birth = db.Column(db.Date, nullable=True)
    occupation = db.Column(db.String(100), nullable=True)
    state_of_origin = db.Column(db.String(50), nullable=True)
    state_of_residence = db.Column(db.String(50), nullable=True)

    # Security
    fingerprint_hash = db.Column(db.String(64), nullable=True)
    last_login = db.Column(db.DateTime, nullable=True)
    last_ip = db.Column(db.String(45), nullable=True)
    login_count = db.Column(db.Integer, default=0)

    # Status
    is_active = db.Column(db.Boolean, default=True)
    is_admin = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, index=True)
    updated_at = db.Column(
        db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow
    )
    deleted_at = db.Column(db.DateTime, nullable=True)

    # Relationships – simple backrefs only
    calculations = db.relationship("Calculation", backref="user", lazy="select")
    credit_balance = db.relationship(
        "CreditBalance", backref="user", uselist=False, lazy="select"
    )
    transactions = db.relationship("CreditTransaction", backref="user", lazy="select")
    tax_years = db.relationship("TaxYear", backref="user", lazy="select")
    optimization_tips = db.relationship(
        "OptimizationTip", backref="user", lazy="select"
    )
    events = db.relationship("UserEvent", backref="user", lazy="select")
    feature_usage = db.relationship("FeatureUsage", backref="user", lazy="select")
    badges = db.relationship("Badge", backref="user", lazy="select")
    daily_entries = db.relationship("DailyEntry", backref="user", lazy="select")

    # Referrals are handled in the Referral model with backrefs

    def to_dict(self):
        """Convert user to dictionary (safe version)"""
        return {
            "id": self.id,
            "email": self.email,
            "full_name": self.full_name,
            "profile_picture": self.profile_picture,
            "phone": self.phone,
            "date_of_birth": (
                self.date_of_birth.isoformat() if self.date_of_birth else None
            ),
            "occupation": self.occupation,
            "state_of_origin": self.state_of_origin,
            "state_of_residence": self.state_of_residence,
            "email_verified": self.email_verified,
            "phone_verified": self.phone_verified,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            "last_login": self.last_login.isoformat() if self.last_login else None,
        }

    def __repr__(self):
        return f"<User {self.email}>"
