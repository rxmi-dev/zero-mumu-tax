# backend/google_auth.py
from google.oauth2 import id_token
from google.auth.transport import requests
import os

# Get from Google Cloud Console
GOOGLE_CLIENT_ID = os.getenv('GOOGLE_CLIENT_ID')

def verify_google_token(token):
    """
    Verify Google ID token and return user info
    """
    try:
        # Specify the CLIENT_ID of the app that accesses the backend:
        idinfo = id_token.verify_oauth2_token(
            token, 
            requests.Request(), 
            GOOGLE_CLIENT_ID
        )

        # Or, if multiple clients access the backend:
        # idinfo = id_token.verify_oauth2_token(token, requests.Request())
        # if idinfo['aud'] not in [CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]:
        #     raise ValueError('Could not verify audience.')

        if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
            raise ValueError('Wrong issuer.')

        # Google token is valid
        return {
            'google_id': idinfo['sub'],
            'email': idinfo['email'],
            'full_name': idinfo.get('name', ''),
            'profile_picture': idinfo.get('picture', ''),
            'email_verified': idinfo.get('email_verified', False)
        }
    except ValueError as e:
        # Invalid token
        print(f"Google token verification failed: {e}")
        return None