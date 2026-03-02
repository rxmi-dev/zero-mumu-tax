# backend/models.py
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from datetime import datetime
import hashlib

db = SQLAlchemy()
bcrypt = Bcrypt()

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    google_id = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    full_name = db.Column(db.String(100), nullable=False)
    profile_picture = db.Column(db.String(500), nullable=True)
    phone = db.Column(db.String(15), nullable=True)
    phone_verified = db.Column(db.Boolean, default=False)
    email_verified = db.Column(db.Boolean, default=True)
    date_of_birth = db.Column(db.Date, nullable=True)
    occupation = db.Column(db.String(100), nullable=True)
    state_of_origin = db.Column(db.String(50), nullable=True)
    state_of_residence = db.Column(db.String(50), nullable=True)
    fingerprint_hash = db.Column(db.String(64), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    last_login = db.Column(db.DateTime, nullable=True)
    is_active = db.Column(db.Boolean, default=True)
    
    # Relationships
    calculations = db.relationship('Calculation', backref='user', lazy=True)
    credit_balance = db.relationship('CreditBalance', backref='user', uselist=False, lazy=True)
    transactions = db.relationship('CreditTransaction', backref='user', lazy=True)
    tax_years = db.relationship('TaxYear', backref='user', lazy=True)
    optimization_tips = db.relationship('OptimizationTip', backref='user', lazy=True)
    events = db.relationship('UserEvent', backref='user', lazy=True)
    feature_usage = db.relationship('FeatureUsage', backref='user', lazy=True)
    
    # Referrals - Fixed: Use different backref names
    referrals_given = db.relationship('Referral', 
                                     foreign_keys='Referral.referrer_id', 
                                     backref='referrer_user',  # Changed from 'referrer'
                                     lazy=True)
    referrals_received = db.relationship('Referral', 
                                        foreign_keys='Referral.referred_id', 
                                        backref='referred_user',  # Changed from 'referred'
                                        lazy=True)
    
    # Badges
    badges = db.relationship('Badge', backref='user', lazy=True)
    
    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')
    
    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)
    
    def generate_fingerprint(self, user_agent, ip_address):
        return hashlib.sha256(f"{user_agent}|{ip_address}".encode()).hexdigest()

class Calculation(db.Model):
    __tablename__ = 'calculations'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    calculator_type = db.Column(db.String(20), nullable=False)
    input_data = db.Column(db.JSON, nullable=False)
    result_data = db.Column(db.JSON, nullable=False)
    tax_year = db.Column(db.Integer, default=2026)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    is_saved = db.Column(db.Boolean, default=True)
    is_comparison = db.Column(db.Boolean, default=False)
    comparison_group = db.Column(db.String(50), nullable=True)

class CreditBalance(db.Model):
    __tablename__ = 'credit_balances'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), unique=True, nullable=False)
    balance = db.Column(db.Integer, default=0)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class CreditTransaction(db.Model):
    __tablename__ = 'credit_transactions'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    amount = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(200))
    transaction_type = db.Column(db.String(20))
    reference = db.Column(db.String(100), unique=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class TaxYear(db.Model):
    __tablename__ = 'tax_years'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    total_income = db.Column(db.Float, default=0)
    total_tax_paid = db.Column(db.Float, default=0)
    effective_rate = db.Column(db.Float, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class OptimizationTip(db.Model):
    __tablename__ = 'optimization_tips'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    calculation_id = db.Column(db.Integer, db.ForeignKey('calculations.id'), nullable=True)
    tip_type = db.Column(db.String(50))
    title = db.Column(db.String(200))
    description = db.Column(db.Text)
    potential_savings = db.Column(db.Float, default=0)
    implemented = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class UserEvent(db.Model):
    __tablename__ = 'user_events'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    event_type = db.Column(db.String(50))
    calculator_type = db.Column(db.String(20), nullable=True)
    credits_used = db.Column(db.Integer, default=0)
    page = db.Column(db.String(50))
    user_agent = db.Column(db.String(200))
    ip_address = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class FeatureUsage(db.Model):
    __tablename__ = 'feature_usage'
    
    id = db.Column(db.Integer, primary_key=True)
    feature_name = db.Column(db.String(50))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    credits_spent = db.Column(db.Integer, default=0)
    session_id = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Referral(db.Model):
    __tablename__ = 'referrals'
    
    id = db.Column(db.Integer, primary_key=True)
    referrer_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    referred_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    referral_code = db.Column(db.String(20), unique=True, nullable=False)
    used = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    used_at = db.Column(db.DateTime, nullable=True)
    
    # Relationships - These match the backref names we set in User
    referrer = db.relationship('User', foreign_keys=[referrer_id], back_populates='referrals_given')
    referred = db.relationship('User', foreign_keys=[referred_id], back_populates='referrals_received')

class Badge(db.Model):
    __tablename__ = 'badges'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(200))
    icon = db.Column(db.String(10), default='🏆')
    awarded_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    __table_args__ = (db.UniqueConstraint('user_id', 'name', name='unique_user_badge'),)

class BulkUploadJob(db.Model):
    __tablename__ = 'bulk_upload_jobs'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    filename = db.Column(db.String(200))
    status = db.Column(db.String(20))
    total_records = db.Column(db.Integer, default=0)
    processed_records = db.Column(db.Integer, default=0)
    error_log = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    completed_at = db.Column(db.DateTime, nullable=True)

class PasswordResetToken(db.Model):
    __tablename__ = 'password_reset_tokens'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    token = db.Column(db.String(500), unique=True, nullable=False)
    expires_at = db.Column(db.DateTime, nullable=False)
    used = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class VerificationCode(db.Model):
    __tablename__ = 'verification_codes'
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), nullable=True)
    phone = db.Column(db.String(15), nullable=True)
    code = db.Column(db.String(6), nullable=False)
    purpose = db.Column(db.String(20))
    expires_at = db.Column(db.DateTime, nullable=False)
    used = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class SocialProofStats(db.Model):
    __tablename__ = 'social_proof_stats'
    
    id = db.Column(db.Integer, primary_key=True)
    total_users = db.Column(db.Integer, default=0)
    total_calculations = db.Column(db.Integer, default=0)
    total_savings = db.Column(db.Float, default=0)
    monthly_active = db.Column(db.Integer, default=0)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)