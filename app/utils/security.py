# backend/app/utils/security.py
from flask import request, jsonify, g
import re
import html
import bleach
from functools import wraps
import hashlib
import hmac
import os


def register_security_handlers(app):
    """Register security middleware and handlers"""

    # Security headers after request
    @app.after_request
    def add_security_headers(response):
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["X-XSS-Protection"] = "1; mode=block"
        response.headers["Strict-Transport-Security"] = (
            "max-age=31536000; includeSubDomains"
        )
        response.headers["Content-Security-Policy"] = "default-src 'self'"
        response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        return response

    # Content type validation before request
    @app.before_request
    def validate_content_type():
        if request.method in ["POST", "PUT"] and request.is_json is False:
            if (
                request.content_type
                and "multipart/form-data" not in request.content_type
            ):
                return jsonify({"error": "Content-Type must be application/json"}), 415

    # Input sanitization before request
    @app.before_request
    def sanitize_input():
        if request.is_json:
            # Deep sanitize JSON data
            sanitized = sanitize_data(request.get_json(silent=True) or {})
            request._cached_json = (
                sanitized,
                request._cached_json[1] if request._cached_json else None,
            )


def sanitize_data(data):
    """Recursively sanitize data"""
    if isinstance(data, dict):
        return {k: sanitize_data(v) for k, v in data.items()}
    elif isinstance(data, list):
        return [sanitize_data(item) for item in data]
    elif isinstance(data, str):
        # Remove any script tags and sanitize
        cleaned = bleach.clean(data, tags=[], attributes={}, strip=True)
        return html.escape(cleaned)
    else:
        return data


def validate_input(data, schema):
    """Validate input against a schema"""
    for field, rules in schema.items():
        if rules.get("required", False) and field not in data:
            return False, f"{field} is required"

        if field in data:
            value = data[field]

            # Type validation
            if "type" in rules:
                if rules["type"] == "number":
                    try:
                        float(value)
                    except (ValueError, TypeError):
                        return False, f"{field} must be a number"

                elif rules["type"] == "string":
                    if not isinstance(value, str):
                        return False, f"{field} must be a string"

                elif rules["type"] == "email":
                    email_regex = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    if not re.match(email_regex, str(value)):
                        return False, f"{field} must be a valid email"

            # Length validation
            if "min_length" in rules and len(str(value)) < rules["min_length"]:
                return (
                    False,
                    f"{field} must be at least {rules['min_length']} characters",
                )

            if "max_length" in rules and len(str(value)) > rules["max_length"]:
                return (
                    False,
                    f"{field} must be at most {rules['max_length']} characters",
                )

            # Range validation
            if "min" in rules and float(value) < rules["min"]:
                return False, f"{field} must be at least {rules['min']}"

            if "max" in rules and float(value) > rules["max"]:
                return False, f"{field} must be at most {rules['max']}"

    return True, None


def generate_csrf_token():
    """Generate CSRF token"""
    return hashlib.sha256(os.urandom(32)).hexdigest()


def verify_csrf_token(token):
    """Verify CSRF token"""
    # Implement CSRF verification logic
    return True  # Placeholder


def rate_limit_key_func():
    """Custom rate limit key function"""
    return f"{request.remote_addr}:{request.endpoint}"
