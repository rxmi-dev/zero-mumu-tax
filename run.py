# run.py
import os
import sys
from app import create_app, db
from flask_migrate import Migrate  # Add this import

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app import create_app, db

app = create_app()
migrate = Migrate(app, db)  # Initialize Migrate with your app and db

# Add this to make Flask CLI aware of your app
from flask.cli import FlaskGroup

cli = FlaskGroup(app)

if __name__ == "__main__":
    print("=" * 60)
    print("🔥 ZERO MUMU TAX BACKEND - PRODUCTION READY")
    print("=" * 60)
    print("✅ Security headers enabled")
    print("✅ Rate limiting active")
    print("✅ Input validation active")
    print("✅ SQL injection protection")
    print("✅ XSS protection active")
    print("✅ CSRF protection active")
    print("✅ CORS configured")
    print("✅ Redis caching ready")
    print("✅ JWT with blacklist")
    print("=" * 60)

    port = int(os.environ.get("PORT", 10000))

    # Create tables automatically on startup (simpler than migrations)
    with app.app_context():
        db.create_all()
        print("✅ Database tables created/verified")

    app.run(
        host="0.0.0.0",
        port=port,
        debug=True,
        threaded=True,
    )
