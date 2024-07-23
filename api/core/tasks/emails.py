from django.conf import settings
from datetime import datetime

from core.utils.email_handler import send_email
from core.helpers.sendgrid_templates import SG_TEMPLATE_IDS


def activation_email(first_name, email, code):
    try:
        vote_template_id = SG_TEMPLATE_IDS["VERIFY_YOUR_REGISTRATION"]
        params = {}
        params["first_name"] = first_name
        params["activate_link"] = f"{settings.CLIENT_URL}/app/activate-user?token={code}"
        send_email(
            email, params, vote_template_id, "contact_form_sent")
    except Exception as e:
        print(e)
    return


def activation_email_with_password(first_name, email, code, password):
    try:
        email_template_id = SG_TEMPLATE_IDS["VERIFY_YOUR_REGISTRATION_WITH_PASSWORD"]
        params = {}
        params["first_name"] = first_name
        params["temporary_password"] = password
        params["activate_link"] = f"{settings.CLIENT_URL}/app/activate-user?token={code}"
        send_email(
            email, params, email_template_id, "contact_form_sent")
    except Exception as e:
        pass
    return


def reset_password_email(first_name, email, code):
    try:
        email_template_id = SG_TEMPLATE_IDS["RESET_PASSWORD"]
        params = {}
        params["first_name"] = first_name
        params["reset_link"] = f"{settings.CLIENT_URL}/app/forgot-password?token={code}"
        send_email(
            email, params, email_template_id, "contact_form_sent")
    except Exception as e:
        pass
    return


def reactivate_email_after_unsuccessful_login_attempts(first_name, email, code):
    try:
        email_template_id = SG_TEMPLATE_IDS["REACTIVATE_ACCOUNT"]
        params = {}
        params["first_name"] = first_name
        params["activate_link"] = f"{settings.CLIENT_URL}/app/activate-user?token={code}"
        send_email(
            email, params, email_template_id, "contact_form_sent")
    except Exception as e:
        pass
    return
