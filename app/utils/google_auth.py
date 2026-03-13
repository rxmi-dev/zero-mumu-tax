# backend-new/app/utils/google_auth.py
from google.oauth2 import id_token
from google.auth.transport import requests
import os

GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")


def verify_google_token(token):
    """
    Verify Google ID token and return user info
    """
    try:
        idinfo = id_token.verify_oauth2_token(
            token, requests.Request(), GOOGLE_CLIENT_ID
        )

        if idinfo["iss"] not in ["accounts.google.com", "https://accounts.google.com"]:
            raise ValueError("Wrong issuer.")

        return {
            "google_id": idinfo["sub"],
            "email": idinfo["email"],
            "full_name": idinfo.get("name", ""),
            "profile_picture": idinfo.get("picture", ""),
            "email_verified": idinfo.get("email_verified", False),
        }
    except ValueError as e:
        print(f"Google token verification failed: {e}")
        return None
