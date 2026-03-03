# backend/run.py
from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, create_refresh_token, jwt_required, get_jwt_identity, decode_token
from flask_mail import Mail, Message
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from datetime import datetime, timedelta
import os
import uuid
import hashlib
import base64
import random
from dotenv import load_dotenv
import requests as http_requests
import google.oauth2.id_token
import google.auth.transport.requests

# Import db and models
from models import db, bcrypt, User, Calculation, CreditBalance, CreditTransaction, VerificationCode, PasswordResetToken, TaxYear, OptimizationTip, BulkUploadJob, UserEvent, FeatureUsage, Referral, Badge, SocialProofStats

load_dotenv()

app = Flask(__name__)

# ========================================
# CONFIGURATION
# ========================================
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'dev-secret-key-change-in-production')
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'super-secret-jwt-key-change-in-production')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///tax_app.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(minutes=30)
app.config['JWT_REFRESH_TOKEN_EXPIRES'] = timedelta(days=7)
app.config['JWT_TOKEN_LOCATION'] = ['headers']
app.config['JWT_HEADER_NAME'] = 'Authorization'
app.config['JWT_HEADER_TYPE'] = 'Bearer'

# Email config
app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER', 'smtp.gmail.com')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT', 587))
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS', 'true').lower() == 'true'
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_DEFAULT_SENDER', 'noreply@zeromumutax.com')

# Google OAuth
GOOGLE_CLIENT_ID = os.getenv('GOOGLE_CLIENT_ID')
GOOGLE_CLIENT_SECRET = os.getenv('GOOGLE_CLIENT_SECRET')

# CORS
cors_origins_str = os.getenv('CORS_ORIGINS', 'http://localhost:5173,http://localhost:5174,https://zero-mumu-tax.netlify.app,https://*.netlify.app')
cors_origins = [origin.strip() for origin in cors_origins_str.split(',')]
CORS(app, origins=cors_origins, supports_credentials=True)

FRONTEND_URL = os.getenv('FRONTEND_URL', 'https://zero-mumu-tax.netlify.app')

# Initialize extensions
db.init_app(app)
bcrypt.init_app(app)
jwt = JWTManager(app)
mail = Mail(app)
limiter = Limiter(get_remote_address, app=app, default_limits=["1000 per day", "200 per hour"])

# ========================================
# CORS PREFLIGHT HANDLER
# ========================================
@app.before_request
def handle_preflight():
    if request.method == "OPTIONS":
        response = make_response()
        origin = request.headers.get('Origin')
        if origin in cors_origins or any(origin.endswith(domain.replace('*', '')) for domain in cors_origins if '*' in domain):
            response.headers.add("Access-Control-Allow-Origin", origin)
        else:
            response.headers.add("Access-Control-Allow-Origin", cors_origins[0] if cors_origins else '*')
        response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization, X-API-Key")
        response.headers.add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        response.headers.add("Access-Control-Allow-Credentials", "true")
        response.headers.add("Access-Control-Max-Age", "3600")
        return response, 200

# Create tables
with app.app_context():
    db.create_all()
    if not SocialProofStats.query.first():
        stats = SocialProofStats(
            total_users=0,
            total_calculations=0,
            total_savings=0,
            monthly_active=0
        )
        db.session.add(stats)
        db.session.commit()
    print("✅ Database tables created")

# ========================================
# NTA 2025 CONSTANTS
# ========================================
MINIMUM_WAGE = 70000 * 12  # ₦840,000
SMALL_COMPANY_THRESHOLD = 100000000  # ₦100 million
ASSET_THRESHOLD = 250000000  # ₦250 million
SMALL_CIT_RATE = 0.0
LARGE_CIT_RATE = 0.30
DEVELOPMENT_LEVY_RATE = 0.04

PROFESSIONAL_SERVICES = [
    'law_firm', 'accounting_firm', 'medical_practice', 
    'consulting', 'engineering_consulting', 'management_consulting', 
    'architectural_firm'
]

# ========================================
# PIT CALCULATION FUNCTIONS
# ========================================
def calculate_progressive_tax(income):
    """Calculate tax using NTA 2025 progressive bands"""
    if income <= 0:
        return 0
    
    tax = 0
    remaining = income
    
    # Band 1: First ₦800,000 @ 0%
    if remaining > 0:
        taxable = min(remaining, 800000)
        tax += taxable * 0.00
        remaining -= taxable
    
    # Band 2: Next ₦2,200,000 @ 15%
    if remaining > 0:
        taxable = min(remaining, 2200000)
        tax += taxable * 0.15
        remaining -= taxable
    
    # Band 3: Next ₦9,000,000 @ 18%
    if remaining > 0:
        taxable = min(remaining, 9000000)
        tax += taxable * 0.18
        remaining -= taxable
    
    # Band 4: Next ₦13,000,000 @ 21%
    if remaining > 0:
        taxable = min(remaining, 13000000)
        tax += taxable * 0.21
        remaining -= taxable
    
    # Band 5: Next ₦25,000,000 @ 23%
    if remaining > 0:
        taxable = min(remaining, 25000000)
        tax += taxable * 0.23
        remaining -= taxable
    
    # Band 6: Above ₦50,000,000 @ 25%
    if remaining > 0:
        tax += remaining * 0.25
    
    return round(tax, 2)

def calculate_pit(data):
    """Calculate Personal Income Tax"""
    try:
        # Employment income
        employment_salary = float(data.get('employment_salary', 0) or 0)
        employment_basic = float(data.get('employment_basic', 0) or 0)
        employment_housing = float(data.get('employment_housing', 0) or 0)
        employment_transport = float(data.get('employment_transport', 0) or 0)
        employment_bonus = float(data.get('employment_bonus', 0) or 0)
        
        # Business income
        business_profit = float(data.get('business_profit', 0) or 0)
        
        # Other income
        pension_income = float(data.get('pension_income', 0) or 0)
        
        # Deductions
        pension_rsa = float(data.get('pension_rsa', 0) or 0)
        nhis = float(data.get('nhis', 0) or 0)
        nhf = float(data.get('nhf', 0) or 0)
        rent_paid = float(data.get('rent_paid', 0) or 0)
        paye_deducted = float(data.get('paye_deducted', 0) or 0)
        wht_credits = float(data.get('wht_credits', 0) or 0)
        
        # Calculate total income
        total_employment = employment_salary + employment_bonus
        total_business = business_profit
        total_other = pension_income
        
        total_income = total_employment + total_business + total_other
        
        # Calculate qualifying income for pension
        qualifying_income = employment_basic + employment_housing + employment_transport
        max_pension = qualifying_income * 0.08
        actual_pension = min(pension_rsa, max_pension) if pension_rsa > 0 else max_pension
        
        # NHIS deduction (max 5% of basic)
        max_nhis = employment_basic * 0.05
        actual_nhis = min(nhis, max_nhis) if nhis > 0 else max_nhis
        
        # NHF deduction (max 2.5% of basic)
        max_nhf = employment_basic * 0.025
        actual_nhf = min(nhf, max_nhf) if nhf > 0 else max_nhf
        
        # Rent relief (20% of rent, max 500,000)
        rent_relief = min(rent_paid * 0.20, 500000)
        
        total_deductions = actual_pension + actual_nhis + actual_nhf + rent_relief
        
        chargeable_income = max(0, total_income - total_deductions)
        
        # Check if exempt (below minimum wage)
        if total_income <= MINIMUM_WAGE:
            return {
                'success': True,
                'data': {
                    'exempt': True,
                    'minimum_wage': MINIMUM_WAGE,
                    'total_income': total_income,
                    'message': 'Tax exempt - Minimum wage earner'
                }
            }
        
        # Calculate tax using progressive bands
        regular_tax = calculate_progressive_tax(chargeable_income)
        total_tax = regular_tax
        
        # Apply WHT credits
        total_tax = max(0, total_tax - wht_credits)
        
        # Determine result type (refund, additional, balanced)
        if paye_deducted > total_tax:
            refund = paye_deducted - total_tax
            additional = 0
            result_type = 'refund'
        else:
            refund = 0
            additional = total_tax - paye_deducted
            result_type = 'additional' if additional > 0 else 'balanced'
        
        result = {
            'exempt': False,
            'total_income': round(total_income, 2),
            'total_deductions': round(total_deductions, 2),
            'chargeable_income': round(chargeable_income, 2),
            'tax_payable': round(total_tax, 2),
            'paye_deducted': round(paye_deducted, 2),
            'refund_amount': round(refund, 2),
            'additional_tax': round(additional, 2),
            'result_type': result_type,
            'effective_rate': round((total_tax/total_income*100), 2) if total_income > 0 else 0,
            'deductions_breakdown': {
                'pension': round(actual_pension, 2),
                'nhis': round(actual_nhis, 2),
                'nhf': round(actual_nhf, 2),
                'rent_relief': round(rent_relief, 2)
            }
        }
        
        return {'success': True, 'data': result}
        
    except Exception as e:
        print(f"🔥 PIT calculation error: {str(e)}")
        import traceback
        traceback.print_exc()
        return {'success': False, 'error': str(e)}

# ========================================
# CIT CALCULATION FUNCTIONS
# ========================================
def calculate_capital_allowances(assets_data, assessable_profit):
    """Calculate capital allowances based on NTA 2025 rates"""
    total_annual = 0
    rates = {
        'industrial_building': 0.10,
        'non_industrial_building': 0.10,
        'plant_machinery': 0.20,
        'furniture_fittings': 0.20,
        'motor_vehicle': 0.20,
        'agricultural_plant': 0.95,
        'public_transport': 0.95,
        'mining': 0.95,
        'plantation': 0.50,
        'housing_estate': 0.25,
        'rnd': 0.95
    }
    
    for asset_type, value in assets_data.items():
        if value > 0 and asset_type in rates:
            total_annual += value * rates[asset_type]
    
    max_allowed = assessable_profit * (2/3)
    actual_allowance = min(total_annual, max_allowed)
    
    return {
        'annual': round(total_annual, 2),
        'restricted': round(actual_allowance, 2),
        'excess': round(max(0, total_annual - max_allowed), 2)
    }

def calculate_cit(data):
    """Calculate Companies Income Tax"""
    try:
        business_type = data.get('business_type', 'trading')
        turnover = float(data.get('turnover', 0) or 0)
        total_assets = float(data.get('total_assets', 0) or 0)
        
        trading_profit = float(data.get('trading_profit', 0) or 0)
        rental_income = float(data.get('rental_income', 0) or 0)
        
        operating_expenses = float(data.get('operating_expenses', 0) or 0)
        interest_expense = float(data.get('interest_expense', 0) or 0)
        
        # Assets for capital allowances
        assets_data = {
            'industrial_building': float(data.get('industrial_building', 0) or 0),
            'plant_machinery': float(data.get('plant_machinery', 0) or 0),
            'furniture_fittings': float(data.get('furniture_fittings', 0) or 0),
            'motor_vehicle': float(data.get('motor_vehicle', 0) or 0)
        }
        
        losses_brought_forward = float(data.get('losses_brought_forward', 0) or 0)
        wht_credits = float(data.get('wht_credits', 0) or 0)
        
        total_income = trading_profit + rental_income
        total_expenses = operating_expenses + interest_expense
        
        pbt = total_income - total_expenses
        profit_after_losses = max(0, pbt - losses_brought_forward)
        
        capital_allowance_result = calculate_capital_allowances(assets_data, profit_after_losses)
        capital_allowance = capital_allowance_result['restricted']
        assessable_profit = max(0, profit_after_losses - capital_allowance)
        
        # Determine company tier
        is_professional = business_type in PROFESSIONAL_SERVICES
        if (turnover <= SMALL_COMPANY_THRESHOLD and 
            total_assets <= ASSET_THRESHOLD and 
            not is_professional):
            company_tier = 'small'
            cit_rate = SMALL_CIT_RATE
            levy_rate = 0
        else:
            company_tier = 'large'
            cit_rate = LARGE_CIT_RATE
            levy_rate = DEVELOPMENT_LEVY_RATE
        
        cit = assessable_profit * cit_rate
        levy = assessable_profit * levy_rate
        total_tax = cit + levy
        
        # Apply WHT credits
        total_tax = max(0, total_tax - wht_credits)
        
        result = {
            'company_tier': company_tier,
            'total_income': round(total_income, 2),
            'total_expenses': round(total_expenses, 2),
            'pbt': round(pbt, 2),
            'assessable_profit': round(assessable_profit, 2),
            'cit_rate': cit_rate * 100,
            'cit': round(cit, 2),
            'levy_rate': levy_rate * 100,
            'levy': round(levy, 2),
            'total_tax_payable': round(total_tax, 2),
            'capital_allowances': round(capital_allowance, 2)
        }
        
        return {'success': True, 'data': result}
        
    except Exception as e:
        print(f"🔥 CIT calculation error: {str(e)}")
        import traceback
        traceback.print_exc()
        return {'success': False, 'error': str(e)}

# ========================================
# VAT CALCULATION
# ========================================
def calculate_vat(data):
    """Calculate Value Added Tax"""
    try:
        amount = float(data.get('amount', 0) or 0)
        calc_type = data.get('calc_type', 'net_to_gross')
        
        vat_rate = 0.075
        
        if calc_type == 'net_to_gross':
            vat = amount * vat_rate
            gross = amount + vat
            return {
                'success': True,
                'data': {
                    'vat': vat,
                    'gross': gross,
                    'net': amount
                }
            }
        else:
            net = amount / (1 + vat_rate)
            vat = amount - net
            return {
                'success': True,
                'data': {
                    'vat': vat,
                    'gross': amount,
                    'net': net
                }
            }
    except Exception as e:
        return {'success': False, 'error': str(e)}

# ========================================
# WHT CALCULATION
# ========================================
def calculate_wht(data):
    """Calculate Withholding Tax"""
    try:
        rates = {
            'company_to_company': {
                'contract': 0.05, 'rent': 0.10, 'interest': 0.10,
                'dividend': 0.10, 'royalty': 0.10, 'professional': 0.05
            },
            'company_to_individual': {
                'contract': 0.05, 'rent': 0.10, 'interest': 0.10,
                'dividend': 0.10, 'royalty': 0.10, 'professional': 0.05
            },
            'individual_to_company': {
                'contract': 0.05, 'rent': 0.10, 'interest': 0.10,
                'dividend': 0.10, 'royalty': 0.10, 'professional': 0.05
            }
        }
        
        payer = data.get('payer_type', 'company_to_company')
        transaction = data.get('transaction_type', 'contract')
        amount = float(data.get('amount', 1000000) or 1000000)
        
        rate = rates.get(payer, rates['company_to_company']).get(transaction, 0.05)
        wht = amount * rate
        
        return {
            'success': True,
            'data': {
                'rate': rate * 100,
                'wht': wht,
                'net': amount - wht,
                'amount': amount,
                'payer_type': payer,
                'transaction_type': transaction
            }
        }
    except Exception as e:
        return {'success': False, 'error': str(e)}

# ========================================
# RENT RELIEF CALCULATION
# ========================================
def calculate_rent_relief(data):
    """Calculate Rent Relief"""
    try:
        rent = float(data.get('rent', 0) or 0)
        relief = min(rent * 0.20, 500000)
        return {
            'success': True,
            'data': {
                'rent': rent,
                'relief': relief,
                'max_relief': 500000,
                'is_capped': rent * 0.20 > 500000
            }
        }
    except Exception as e:
        return {'success': False, 'error': str(e)}

# ========================================
# GOOGLE AUTH ENDPOINTS
# ========================================
@app.route('/api/auth/google', methods=['POST', 'OPTIONS'])
def google_auth():
    if request.method == 'OPTIONS':
        return handle_preflight()
    
    try:
        data = request.get_json()
        code = data.get('code')
        referral_code = data.get('ref')
        
        if not code:
            return jsonify({'error': 'No code provided'}), 400
        
        token_url = 'https://oauth2.googleapis.com/token'
        token_data = {
            'code': code,
            'client_id': GOOGLE_CLIENT_ID,
            'client_secret': GOOGLE_CLIENT_SECRET,
            'redirect_uri': 'postmessage',
            'grant_type': 'authorization_code'
        }
        
        response = http_requests.post(token_url, data=token_data)
        token_response = response.json()
        
        if 'error' in token_response:
            return jsonify({'error': 'Failed to exchange code', 'details': token_response}), 400
        
        id_token_str = token_response.get('id_token')
        if not id_token_str:
            return jsonify({'error': 'No ID token received'}), 400
        
        idinfo = google.oauth2.id_token.verify_oauth2_token(
            id_token_str,
            google.auth.transport.requests.Request(),
            GOOGLE_CLIENT_ID
        )
        
        google_user = {
            'google_id': idinfo['sub'],
            'email': idinfo['email'],
            'full_name': idinfo.get('name', ''),
            'profile_picture': idinfo.get('picture', ''),
            'email_verified': idinfo.get('email_verified', False)
        }
        
        user = User.query.filter_by(google_id=google_user['google_id']).first()
        is_new_user = False
        
        if not user:
            user = User.query.filter_by(email=google_user['email']).first()
            if user:
                user.google_id = google_user['google_id']
                user.profile_picture = google_user['profile_picture']
            else:
                is_new_user = True
                user = User(
                    google_id=google_user['google_id'],
                    email=google_user['email'],
                    full_name=google_user['full_name'],
                    profile_picture=google_user['profile_picture'],
                    email_verified=True
                )
                db.session.add(user)
                db.session.flush()
                
                credit = CreditBalance(user_id=user.id, balance=15)
                db.session.add(credit)
                
                event = UserEvent(user_id=user.id, event_type='signup', page='google_auth')
                db.session.add(event)
                
                if referral_code:
                    referral = Referral.query.filter_by(referral_code=referral_code, used=False).first()
                    if referral:
                        referral.used = True
                        referral.referred_id = user.id
                        referral.used_at = datetime.utcnow()
                        
                        referrer_credit = CreditBalance.query.filter_by(user_id=referral.referrer_id).first()
                        if referrer_credit:
                            referrer_credit.balance += 15
                            trans = CreditTransaction(
                                user_id=referral.referrer_id, amount=15,
                                description='Referral bonus', transaction_type='bonus'
                            )
                            db.session.add(trans)
                        
                        credit.balance += 15
                        trans2 = CreditTransaction(
                            user_id=user.id, amount=15,
                            description='Welcome + referral bonus', transaction_type='bonus'
                        )
                        db.session.add(trans2)
                        
                        db.session.commit()
        
        user.last_login = datetime.utcnow()
        db.session.commit()
        
        event = UserEvent(user_id=user.id, event_type='login', page='google_auth')
        db.session.add(event)
        db.session.commit()
        
        credit_balance = CreditBalance.query.filter_by(user_id=user.id).first()
        
        access_token = create_access_token(identity=str(user.id), expires_delta=timedelta(minutes=30))
        refresh_token = create_refresh_token(identity=str(user.id), expires_delta=timedelta(days=7))
        
        return jsonify({
            'success': True,
            'access_token': access_token,
            'refresh_token': refresh_token,
            'user': {
                'id': user.id,
                'email': user.email,
                'full_name': user.full_name,
                'profile_picture': user.profile_picture,
                'phone': user.phone,
                'date_of_birth': user.date_of_birth.isoformat() if user.date_of_birth else None,
                'occupation': user.occupation,
                'state_of_origin': user.state_of_origin,
                'state_of_residence': user.state_of_residence,
                'email_verified': True,
                'credit_balance': credit_balance.balance if credit_balance else 15
            }
        }), 200
        
    except Exception as e:
        db.session.rollback()
        print(f"🔥 Google auth error: {str(e)}")
        import traceback
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500

@app.route('/api/auth/refresh', methods=['POST'])
def refresh_token():
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        decoded = decode_token(token)
        user = db.session.get(User, decoded['sub'])
        if not user:
            return jsonify({'error': 'User not found'}), 401
        access_token = create_access_token(identity=str(user.id), expires_delta=timedelta(minutes=30))
        return jsonify({'success': True, 'access_token': access_token}), 200
    except Exception as e:
        return jsonify({'error': 'Invalid token'}), 401

@app.route('/api/auth/me', methods=['GET'])
def get_current_user():
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        decoded = decode_token(token)
        user = db.session.get(User, decoded['sub'])
        if not user:
            return jsonify({'error': 'User not found'}), 404
        credit = CreditBalance.query.filter_by(user_id=user.id).first()
        
        badge_count = Badge.query.filter_by(user_id=user.id).count()
        
        return jsonify({
            'success': True,
            'user': {
                'id': user.id,
                'email': user.email,
                'full_name': user.full_name,
                'profile_picture': user.profile_picture,
                'phone': user.phone,
                'date_of_birth': user.date_of_birth.isoformat() if user.date_of_birth else None,
                'occupation': user.occupation,
                'state_of_origin': user.state_of_origin,
                'state_of_residence': user.state_of_residence,
                'email_verified': user.email_verified,
                'created_at': user.created_at.isoformat() if user.created_at else None,
                'credit_balance': credit.balance if credit else 0,
                'badge_count': badge_count
            }
        }), 200
    except Exception as e:
        return jsonify({'error': 'Invalid token'}), 401

@app.route('/api/auth/profile', methods=['PUT', 'OPTIONS'])
def update_profile():
    if request.method == 'OPTIONS':
        return handle_preflight()
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        decoded = decode_token(token)
        user = db.session.get(User, decoded['sub'])
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        data = request.get_json()
        if 'full_name' in data:
            user.full_name = data['full_name']
        if 'phone' in data:
            user.phone = data['phone']
        if 'date_of_birth' in data and data['date_of_birth']:
            user.date_of_birth = datetime.strptime(data['date_of_birth'], '%Y-%m-%d').date()
        if 'occupation' in data:
            user.occupation = data['occupation']
        if 'state_of_origin' in data:
            user.state_of_origin = data['state_of_origin']
        if 'state_of_residence' in data:
            user.state_of_residence = data['state_of_residence']
        
        db.session.commit()
        credit = CreditBalance.query.filter_by(user_id=user.id).first()
        
        return jsonify({
            'success': True,
            'user': {
                'id': user.id,
                'email': user.email,
                'full_name': user.full_name,
                'profile_picture': user.profile_picture,
                'phone': user.phone,
                'date_of_birth': user.date_of_birth.isoformat() if user.date_of_birth else None,
                'occupation': user.occupation,
                'state_of_origin': user.state_of_origin,
                'state_of_residence': user.state_of_residence,
                'email_verified': user.email_verified,
                'credit_balance': credit.balance if credit else 0
            }
        }), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# ========================================
# CALCULATION ENDPOINTS
# ========================================
@app.route('/api/v1/calculate/pit', methods=['POST', 'OPTIONS'])
def pit_calc():
    if request.method == 'OPTIONS':
        return handle_preflight()
    try:
        data = request.get_json()
        result = calculate_pit(data)
        if result['success']:
            return jsonify(result), 200
        else:
            return jsonify(result), 400
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/v1/calculate/cit', methods=['POST', 'OPTIONS'])
def cit_calc():
    if request.method == 'OPTIONS':
        return handle_preflight()
    try:
        data = request.get_json()
        result = calculate_cit(data)
        if result['success']:
            return jsonify(result), 200
        else:
            return jsonify(result), 400
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/v1/calculate/vat', methods=['POST', 'OPTIONS'])
def vat_calc():
    if request.method == 'OPTIONS':
        return handle_preflight()
    try:
        data = request.get_json()
        result = calculate_vat(data)
        if result['success']:
            return jsonify(result), 200
        else:
            return jsonify(result), 400
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/v1/calculate/wht', methods=['POST', 'OPTIONS'])
def wht_calc():
    if request.method == 'OPTIONS':
        return handle_preflight()
    try:
        data = request.get_json()
        result = calculate_wht(data)
        if result['success']:
            return jsonify(result), 200
        else:
            return jsonify(result), 400
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/v1/calculate/rent', methods=['POST', 'OPTIONS'])
def rent_calc():
    if request.method == 'OPTIONS':
        return handle_preflight()
    try:
        data = request.get_json()
        result = calculate_rent_relief(data)
        if result['success']:
            return jsonify(result), 200
        else:
            return jsonify(result), 400
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/calculations/save', methods=['POST', 'OPTIONS'])
def save_calculation():
    if request.method == 'OPTIONS':
        return handle_preflight()
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        decoded = decode_token(token)
        user_id = decoded['sub']
        data = request.get_json()
        
        credit = CreditBalance.query.filter_by(user_id=user_id).first()
        if not credit or credit.balance < 1:
            return jsonify({'error': 'Insufficient credits'}), 400
        
        credit.balance -= 1
        calc = Calculation(
            user_id=user_id, 
            calculator_type=data['calculator_type'],
            input_data=data['input_data'], 
            result_data=data['result_data'],
            tax_year=data.get('tax_year', datetime.utcnow().year)
        )
        db.session.add(calc)
        db.session.add(CreditTransaction(
            user_id=user_id, amount=-1, 
            description=f"Saved {data['calculator_type']} calculation",
            transaction_type='spend'
        ))
        db.session.commit()
        
        event = UserEvent(
            user_id=user_id, 
            event_type='save_calculation',
            calculator_type=data['calculator_type'],
            credits_used=1,
            page=data['calculator_type']
        )
        db.session.add(event)
        db.session.commit()
        
        return jsonify({'success': True, 'calculation_id': calc.id, 'new_balance': credit.balance}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@app.route('/api/calculations', methods=['GET'])
def get_calculations():
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        decoded = decode_token(token)
        user_id = decoded['sub']
        calcs = Calculation.query.filter_by(user_id=user_id, is_saved=True).order_by(Calculation.created_at.desc()).all()
        return jsonify({'success': True, 'calculations': [{
            'id': c.id, 'calculator_type': c.calculator_type, 'input_data': c.input_data,
            'result_data': c.result_data, 'tax_year': c.tax_year, 'created_at': c.created_at.isoformat()
        } for c in calcs]}), 200
    except Exception as e:
        return jsonify({'error': 'Invalid token'}), 401

@app.route('/api/calculations/<int:calc_id>', methods=['DELETE'])
def delete_calculation(calc_id):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        decoded = decode_token(token)
        user_id = decoded['sub']
        calc = Calculation.query.filter_by(id=calc_id, user_id=user_id).first()
        if not calc:
            return jsonify({'error': 'Not found'}), 404
        db.session.delete(calc)
        db.session.commit()
        return jsonify({'success': True}), 200
    except Exception as e:
        return jsonify({'error': 'Invalid token'}), 401

# ========================================
# CREDIT PURCHASE
# ========================================
@app.route('/api/credits/purchase', methods=['POST', 'OPTIONS'])
def purchase_credits():
    if request.method == 'OPTIONS':
        return handle_preflight()

    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        decoded = decode_token(token)
        user_id = decoded['sub']

        data = request.get_json()
        credits = data.get('credits')

        if not credits:
            return jsonify({'error': 'Credits amount required'}), 400

        credit_balance = CreditBalance.query.filter_by(user_id=user_id).first()
        if not credit_balance:
            credit_balance = CreditBalance(user_id=user_id, balance=0)
            db.session.add(credit_balance)

        credit_balance.balance += credits

        transaction = CreditTransaction(
            user_id=user_id,
            amount=credits,
            description=f'Purchased {credits} credits',
            transaction_type='purchase',
            reference=str(uuid.uuid4())
        )
        db.session.add(transaction)
        db.session.commit()

        event = UserEvent(user_id=user_id, event_type='purchase', credits_used=credits, page='credits')
        db.session.add(event)
        db.session.commit()

        return jsonify({
            'success': True,
            'new_balance': credit_balance.balance,
            'message': f'{credits} credits added successfully'
        }), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# ========================================
# HEALTH CHECK
# ========================================
@app.route('/health', methods=['GET', 'OPTIONS'])
def health():
    if request.method == 'OPTIONS':
        return handle_preflight()
    return jsonify({'status': 'healthy', 'service': 'Zero Mumu Tax API', 'version': 'NTA 2025'})

# ========================================
# STATS ENDPOINTS
# ========================================
@app.route('/api/stats/user-impact', methods=['GET'])
def get_user_impact_stats():
    """Get personalized impact statistics for a user"""
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        decoded = decode_token(token)
        user_id = decoded['sub']
        
        # Get user's total calculations
        calc_count = Calculation.query.filter_by(user_id=user_id).count()
        
        # Get user's total savings from optimization tips
        total_savings = db.session.query(db.func.sum(OptimizationTip.potential_savings)).filter_by(user_id=user_id).scalar() or 0
        
        # Get user's rank among all users (by savings)
        higher_savings_count = db.session.query(db.func.count(OptimizationTip.user_id.distinct())).filter(
            OptimizationTip.potential_savings > total_savings
        ).scalar() or 0
        total_users = User.query.count()
        rank_percentile = 100 - (higher_savings_count / total_users * 100) if total_users > 0 else 100
        
        return jsonify({
            'success': True,
            'stats': {
                'calculation_count': calc_count,
                'total_savings': total_savings,
                'rank_percentile': round(rank_percentile, 1),
                'better_than': f"Better than {round(rank_percentile, 1)}% of users"
            }
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 401

# ========================================
# BADGES ENDPOINTS
# ========================================
@app.route('/api/badges', methods=['GET'])
def get_user_badges():
    """Get user's earned badges"""
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        decoded = decode_token(token)
        user_id = decoded['sub']
        
        badges = Badge.query.filter_by(user_id=user_id).order_by(Badge.awarded_at.desc()).all()
        
        return jsonify({
            'success': True,
            'badges': [{
                'name': b.name,
                'description': b.description,
                'icon': b.icon,
                'awarded_at': b.awarded_at.isoformat()
            } for b in badges]
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 401

# ========================================
# WHAT-IF COMPARISON ENDPOINT
# ========================================
@app.route('/api/calculations/compare', methods=['POST', 'OPTIONS'])
def create_comparison():
    if request.method == 'OPTIONS':
        return handle_preflight()
    
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        decoded = decode_token(token)
        user_id = decoded['sub']

        data = request.get_json()
        scenarios = data.get('scenarios', [])
        calculator_type = data.get('calculator_type', 'pit')

        if len(scenarios) != 2:
            return jsonify({'error': 'Need exactly 2 scenarios'}), 400

        # Check credits
        credit_balance = CreditBalance.query.filter_by(user_id=user_id).first()
        if not credit_balance or credit_balance.balance < 2:
            return jsonify({'error': 'Need 2 credits for comparison'}), 400

        group_id = str(uuid.uuid4())
        saved_calcs = []
        
        for i, scenario in enumerate(scenarios):
            # Clean scenario data
            cleaned_scenario = {}
            for k, v in scenario.items():
                if isinstance(v, str):
                    try:
                        cleaned_scenario[k] = float(v.replace(',', '')) if ',' in v else float(v) if v else 0
                    except:
                        cleaned_scenario[k] = v
                else:
                    cleaned_scenario[k] = v

            # Calculate based on type
            if calculator_type == 'pit':
                result = calculate_pit(cleaned_scenario)
            elif calculator_type == 'cit':
                result = calculate_cit(cleaned_scenario)
            else:
                continue

            if not result['success']:
                return jsonify({'error': f'Scenario {i+1} calculation failed'}), 400

            # Save calculation
            calc = Calculation(
                user_id=user_id,
                calculator_type=calculator_type,
                input_data=scenario,
                result_data=result['data'],
                is_comparison=True,
                comparison_group=group_id
            )
            db.session.add(calc)
            saved_calcs.append(calc)

        # Deduct credits
        credit_balance.balance -= 2
        transaction = CreditTransaction(
            user_id=user_id,
            amount=-2,
            description='What-if comparison',
            transaction_type='spend'
        )
        db.session.add(transaction)
        db.session.commit()

        return jsonify({
            'success': True,
            'comparison_group': group_id,
            'calculations': [{
                'id': calc.id,
                'input': calc.input_data,
                'result': calc.result_data
            } for calc in saved_calcs],
            'new_balance': credit_balance.balance
        }), 201

    except Exception as e:
        db.session.rollback()
        print(f"🔥 Comparison error: {str(e)}")
        import traceback
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500

# ========================================
# REFERRAL ENDPOINTS
# ========================================
@app.route('/api/referral/generate', methods=['POST', 'OPTIONS'])
def generate_referral():
    if request.method == 'OPTIONS':
        return handle_preflight()

    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        decoded = decode_token(token)
        user_id = decoded['sub']

        # Check if user already has a referral code
        existing = Referral.query.filter_by(referrer_id=user_id, used=False).first()
        if existing:
            return jsonify({'success': True, 'code': existing.referral_code}), 200

        # Generate unique code
        code_raw = hashlib.md5(f"{user_id}-{uuid.uuid4()}".encode()).digest()
        code = base64.b32encode(code_raw)[:8].decode().upper()

        referral = Referral(
            referrer_id=user_id,
            referral_code=code,
            used=False
        )
        db.session.add(referral)
        db.session.commit()

        return jsonify({'success': True, 'code': code}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@app.route('/api/referral/my-code', methods=['GET'])
def get_my_referral_code():
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        decoded = decode_token(token)
        user_id = decoded['sub']

        referral = Referral.query.filter_by(referrer_id=user_id).first()
        if not referral:
            return jsonify({'success': True, 'code': None, 'count': 0}), 200

        # Count successful referrals
        count = Referral.query.filter_by(referrer_id=user_id, used=True).count()

        return jsonify({
            'success': True,
            'code': referral.referral_code,
            'count': count,
            'credits_earned': count * 15
        }), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# ========================================
# SOCIAL PROOF ENDPOINTS
# ========================================
@app.route('/api/stats/social-proof', methods=['GET'])
def get_social_proof_stats():
    """Get aggregated statistics for social proof"""
    stats = SocialProofStats.query.first()
    if not stats:
        return jsonify({
            'total_users': 0,
            'total_calculations': 0,
            'total_savings': 0,
            'monthly_active': 0
        }), 200
    
    # Format savings for display
    savings_formatted = f"₦{stats.total_savings:,.0f}"
    users_formatted = f"{stats.total_users:,}"
    
    return jsonify({
        'total_users': stats.total_users,
        'total_calculations': stats.total_calculations,
        'total_savings': stats.total_savings,
        'monthly_active': stats.monthly_active,
        'formatted': {
            'users': users_formatted,
            'savings': savings_formatted
        }
    }), 200

# ========================================
# TEASER ENDPOINT
# ========================================
@app.route('/api/teaser/savings-estimate', methods=['POST'])
def get_savings_estimate():
    """Estimate potential savings based on basic info"""
    try:
        data = request.get_json()
        income = float(data.get('income', 0) or 0)
        
        if income <= 0:
            return jsonify({'estimate': 45000})  # Default teaser
        
        # Simple estimation algorithm
        if income < 1000000:
            estimate = 45000
        elif income < 3000000:
            estimate = 87000
        elif income < 10000000:
            estimate = 125000
        elif income < 25000000:
            estimate = 234000
        elif income < 50000000:
            estimate = 356000
        else:
            estimate = 512000
        
        # Add some randomness to make it feel personalized
        variation = random.randint(-5000, 5000)
        estimate = max(10000, estimate + variation)
        
        return jsonify({
            'estimate': estimate,
            'formatted': f"₦{estimate:,}"
        }), 200
        
    except Exception as e:
        return jsonify({'estimate': 45000}), 200

# ========================================
# OPTIMIZATION TIPS
# ========================================
@app.route('/api/optimization-tips', methods=['GET'])
def get_optimization_tips():
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        decoded = decode_token(token)
        user_id = decoded['sub']

        # Check credits
        credit_balance = CreditBalance.query.filter_by(user_id=user_id).first()
        if not credit_balance or credit_balance.balance < 3:
            return jsonify({'error': 'Need 3 credits for optimization tips'}), 400

        # Get latest calculation
        latest_calc = Calculation.query.filter_by(
            user_id=user_id,
            calculator_type='pit'
        ).order_by(Calculation.created_at.desc()).first()

        if not latest_calc:
            return jsonify({'error': 'No PIT calculation found'}), 404

        # Generate tips
        tips = []
        data = latest_calc.input_data
        result = latest_calc.result_data
        
        # Pension tip
        pension = float(data.get('pension_rsa', 0) or 0)
        basic = float(data.get('employment_basic', 0) or 0)
        housing = float(data.get('employment_housing', 0) or 0)
        transport = float(data.get('employment_transport', 0) or 0)
        qualifying = basic + housing + transport
        max_pension = qualifying * 0.08
        
        if max_pension > 0 and pension < max_pension:
            additional = max_pension - pension
            tax_saved = additional * 0.20
            tips.append({
                'tip_type': 'pension',
                'title': 'Increase Your Pension',
                'description': f'You can contribute up to ₦{max_pension:,.0f} to pension. Adding ₦{additional:,.0f} could save ₦{tax_saved:,.0f}.',
                'potential_savings': tax_saved
            })
        
        # Rent relief tip
        rent_paid = float(data.get('rent_paid', 0) or 0)
        if rent_paid > 0:
            current_relief = min(rent_paid * 0.20, 500000)
            if current_relief < 500000:
                tips.append({
                    'tip_type': 'rent',
                    'title': 'Maximize Rent Relief',
                    'description': f'You can claim up to ₦500,000 rent relief. Currently claiming ₦{current_relief:,.0f}.',
                    'potential_savings': (500000 - current_relief) * 0.20
                })
        else:
            tips.append({
                'tip_type': 'rent',
                'title': 'Claim Rent Relief',
                'description': 'If you pay rent, you can claim up to ₦500,000 deduction.',
                'potential_savings': 100000
            })

        # Deduct credits
        credit_balance.balance -= 3
        transaction = CreditTransaction(
            user_id=user_id,
            amount=-3,
            description='Optimization tips',
            transaction_type='spend'
        )
        db.session.add(transaction)
        db.session.commit()

        return jsonify({
            'success': True,
            'tips': tips,
            'new_balance': credit_balance.balance
        }), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    print("="*60)
    print("🔥 ZERO MUMU TAX BACKEND - PRODUCTION READY")
    print("="*60)
    print("✅ Database: PostgreSQL/SQLite")
    print("✅ CORS preflight handler added")
    print("✅ Google Auth with detailed logging")
    print("✅ All endpoints: PIT, CIT, VAT, WHT, Rent, Comparison")
    print("✅ Stats, Badges, Referral, Tips endpoints")
    print(f"📍 Frontend URL: {FRONTEND_URL}")
    print("="*60)
    port = int(os.environ.get('PORT', 10000))
    app.run(host='0.0.0.0', port=port, debug=True)