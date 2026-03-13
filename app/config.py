# backend/app/config.py
import os
from datetime import timedelta
from dotenv import load_dotenv

load_dotenv()


class Config:
    # Security
    SECRET_KEY = os.getenv("SECRET_KEY", os.urandom(24).hex())
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", os.urandom(24).hex())
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(minutes=15)
    JWT_REFRESH_TOKEN_EXPIRES = timedelta(days=7)
    JWT_TOKEN_LOCATION = ["headers"]
    JWT_HEADER_NAME = "Authorization"
    JWT_HEADER_TYPE = "Bearer"
    JWT_IDENTITY_CLAIM = "sub"
    JWT_ENCODE_JTI = True

    # Database - Environment based
    FLASK_ENV = os.getenv("FLASK_ENV", "development")
    
    if FLASK_ENV == "production":
        DATABASE_URL = os.getenv("DATABASE_URL", "").replace("postgres://", "postgresql://", 1)
        SQLALCHEMY_DATABASE_URI = DATABASE_URL
        SQLALCHEMY_ENGINE_OPTIONS = {
            "pool_size": 10,
            "pool_recycle": 3600,
            "pool_pre_ping": True,
        }
    else:
        SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "sqlite:///tax_app.db")
        SQLALCHEMY_ENGINE_OPTIONS = {
            "pool_size": 10,
            "pool_recycle": 3600,
            "pool_pre_ping": True,
        }
    
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Google OAuth
    GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
    GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")

    # CORS - FIXED for production
    CORS_ORIGINS_STR = os.getenv(
        "CORS_ORIGINS",
        "http://localhost:5173,http://localhost:5174,https://your-netlify-app.netlify.app"  # Replace with your actual Netlify URL
    )
    CORS_ORIGINS = [origin.strip() for origin in CORS_ORIGINS_STR.split(",")]

    FRONTEND_URL = os.getenv("FRONTEND_URL", "https://your-netlify-app.netlify.app")  # Replace with your actual Netlify URL

    # Rate Limiting - Use Redis in production
    if FLASK_ENV == "production":
        RATELIMIT_STORAGE_URL = os.getenv("REDIS_URL", "redis://localhost:6379/0")
    else:
        RATELIMIT_STORAGE_URL = "memory://"
    
    RATELIMIT_STRATEGY = "fixed-window"
    RATELIMIT_HEADERS_ENABLED = True

    # Cache
    if FLASK_ENV == "production":
        CACHE_TYPE = "RedisCache"
        CACHE_REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379/0")
    else:
        CACHE_TYPE = "SimpleCache"
    
    CACHE_DEFAULT_TIMEOUT = 300

    # Session
    SESSION_COOKIE_SECURE = True
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = "Lax"
    REMEMBER_COOKIE_SECURE = True
    REMEMBER_COOKIE_HTTPONLY = True

    # File Upload
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024
    UPLOAD_EXTENSIONS = [".xlsx", ".xls", ".csv"]

    # NTA 2025 Constants
    MINIMUM_WAGE = 70000 * 12
    SMALL_COMPANY_THRESHOLD = 100000000
    ASSET_THRESHOLD = 250000000
    SMALL_CIT_RATE = 0.0
    LARGE_CIT_RATE = 0.30
    DEVELOPMENT_LEVY_RATE = 0.04

    PROFESSIONAL_SERVICES = [
        "law_firm",
        "accounting_firm",
        "medical_practice",
        "consulting",
    ]

    PIT_TAX_BANDS = [
        {"limit": 800000, "rate": 0.00},
        {"limit": 3000000, "rate": 0.15},
        {"limit": 12000000, "rate": 0.18},
        {"limit": 25000000, "rate": 0.21},
        {"limit": 50000000, "rate": 0.23},
        {"limit": None, "rate": 0.25},
    ]