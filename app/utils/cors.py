from flask import request, make_response
from app.config import Config


def handle_preflight():
    """Global CORS preflight handler"""
    if request.method == "OPTIONS":
        response = make_response()
        origin = request.headers.get("Origin")
        if origin in Config.CORS_ORIGINS or any(
            origin.endswith(domain.replace("*", ""))
            for domain in Config.CORS_ORIGINS
            if "*" in domain
        ):
            response.headers.add("Access-Control-Allow-Origin", origin)
        else:
            response.headers.add(
                "Access-Control-Allow-Origin",
                Config.CORS_ORIGINS[0] if Config.CORS_ORIGINS else "*",
            )
        response.headers.add(
            "Access-Control-Allow-Headers", "Content-Type, Authorization, X-API-Key"
        )
        response.headers.add(
            "Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"
        )
        response.headers.add("Access-Control-Allow-Credentials", "true")
        response.headers.add("Access-Control-Max-Age", "3600")
        return response, 200
    return None
