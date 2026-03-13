# backend-new/app/utils/email_utils.py
from flask_mail import Message
from flask import current_app
from threading import Thread
import logging
from app.extensions import mail

logger = logging.getLogger(__name__)


def send_async_email(app, msg):
    """Send email asynchronously."""
    with app.app_context():
        try:
            mail.send(msg)
            logger.info(f"Email sent to {msg.recipients}")
        except Exception as e:
            logger.error(f"Failed to send email: {str(e)}")


def send_email(subject, recipients, text_body, html_body=None):
    """Send an email with proper encoding."""
    from flask import current_app

    if isinstance(recipients, str):
        recipients = [recipients]

    msg = Message(subject=subject, recipients=recipients, charset="utf-8")
    msg.body = text_body
    if html_body:
        msg.html = html_body

    Thread(
        target=send_async_email, args=(current_app._get_current_object(), msg)
    ).start()
