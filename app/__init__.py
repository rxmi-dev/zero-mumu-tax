# backend/app/__init__.py
from flask import Flask, jsonify
from flask_cors import CORS
from app.config import Config
from app.extensions import db, jwt, bcrypt, mail, limiter, cache
from app.utils.cors import handle_preflight
from app.utils.security import register_security_handlers
import logging
from logging.handlers import RotatingFileHandler
import os
import traceback


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize extensions
    db.init_app(app)
    jwt.init_app(app)
    bcrypt.init_app(app)
    mail.init_app(app)
    limiter.init_app(app)
    cache.init_app(app)

    # CORS with strict settings
    CORS(
        app,
        origins=Config.CORS_ORIGINS,
        supports_credentials=True,
        allow_headers=["Content-Type", "Authorization", "X-API-Key"],
        methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    )

    # Global CORS preflight
    app.before_request(handle_preflight)

    # Register security handlers (CSRF, XSS, etc.)
    register_security_handlers(app)

    # Setup logging
    if not app.debug:
        if not os.path.exists("logs"):
            os.mkdir("logs")
        file_handler = RotatingFileHandler(
            "logs/tax_app.log", maxBytes=10240, backupCount=10
        )
        file_handler.setFormatter(
            logging.Formatter(
                "%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]"
            )
        )
        file_handler.setLevel(logging.INFO)
        app.logger.addHandler(file_handler)
        app.logger.setLevel(logging.INFO)
        app.logger.info("Tax App startup")

    # Global error handler
    @app.errorhandler(Exception)
    def handle_exception(e):
        app.logger.error(f"Unhandled exception: {str(e)}")
        app.logger.error(traceback.format_exc())
        return (
            jsonify(
                {
                    "success": False,
                    "error": f"An internal server error occurred: {str(e)}",
                }
            ),
            500,
        )

    # Create tables and initialize data
    with app.app_context():
        try:
            # Import all models to ensure they're registered with SQLAlchemy
            from app.models import (
                User,
                Calculation,
                CreditBalance,
                CreditTransaction,
                Referral,
                Badge,
                TaxYear,
                OptimizationTip,
                UserEvent,
                FeatureUsage,
                BulkUploadJob,
                SocialProofStats,
                VerificationCode,
                PasswordResetToken,
                DailyEntry,
                TokenBlacklist,
            )

            db.create_all()
            from app.utils.init_db import init_social_proof_stats

            init_social_proof_stats()
            app.logger.info("Database initialized successfully")
        except Exception as e:
            app.logger.error(f"Database initialization error: {str(e)}")
            app.logger.error(traceback.format_exc())

    # Register blueprints with rate limiting
    from app.routes import (
        auth,
        pit,
        cit,
        vat,
        wht,
        rent,
        calculations,
        credits,
        stats,
        badges,
        referral,
        health,
        daily,
        tax_years,
        optimization,
    )

    app.register_blueprint(auth.bp)
    app.register_blueprint(pit.bp)
    app.register_blueprint(cit.bp)
    app.register_blueprint(vat.bp)
    app.register_blueprint(wht.bp)
    app.register_blueprint(rent.bp)
    app.register_blueprint(calculations.bp)
    app.register_blueprint(credits.bp)
    app.register_blueprint(stats.bp)
    app.register_blueprint(badges.bp)
    app.register_blueprint(referral.bp)
    app.register_blueprint(health.bp)
    app.register_blueprint(daily.bp)
    app.register_blueprint(tax_years.bp)
    app.register_blueprint(optimization.bp)

    return app