# app/extensions.py
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_mail import Mail
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_caching import Cache

db = SQLAlchemy()
bcrypt = Bcrypt()
jwt = JWTManager()
mail = Mail()
limiter = Limiter(
    key_func=get_remote_address, default_limits=["200 per day", "50 per hour"]
)
cache = Cache(config={"CACHE_TYPE": "SimpleCache"})  # Explicit config


# JWT error handlers
@jwt.expired_token_loader
def expired_token_callback(jwt_header, jwt_payload):
    return {"success": False, "error": "Token has expired"}, 401


@jwt.invalid_token_loader
def invalid_token_callback(error):
    return {"success": False, "error": "Invalid token"}, 401


@jwt.unauthorized_loader
def missing_token_callback(error):
    return {"success": False, "error": "Token is missing"}, 401
