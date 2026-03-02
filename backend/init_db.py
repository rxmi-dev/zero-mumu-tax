# backend/init_db.py
from run import app, db

with app.app_context():
    db.create_all()
    print("✅ Database created: tax_app.db")
    
    # Optional: Create a test user
    from models import User, CreditBalance
    import os
    
    # Check if we should create test user
    if os.getenv('FLASK_ENV') == 'development':
        test_user = User.query.filter_by(email='test@example.com').first()
        if not test_user:
            # Create test user with Google ID (for testing)
            test_user = User(
                google_id='test-google-id-123',
                email='test@example.com',
                full_name='Test User',
                profile_picture='https://via.placeholder.com/150',
                email_verified=True
            )
            db.session.add(test_user)
            db.session.commit()
            
            credit = CreditBalance(user_id=test_user.id, balance=100)
            db.session.add(credit)
            db.session.commit()
            print("✅ Test user created with 100 credits")