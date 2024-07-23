from celery import shared_task

from core.tasks.general import remove_old_captcha
from core.tasks.emails import activation_email, activation_email_with_password, reset_password_email, reactivate_email_after_unsuccessful_login_attempts


# ------------------------------------------------
# Periodic Tasks
# ------------------------------------------------

@shared_task
def remove_old_captcha_periodic_task():
    remove_old_captcha()

# ------------------------------------------------
# ------------------------------------------------

# ------------------------------------------------
# Send Emails
# ------------------------------------------------


@shared_task
def send_activation_email(first_name, email, code):
    activation_email(first_name, email, code)


@shared_task
def send_activation_email_with_password(first_name, email, code, password):
    activation_email_with_password(first_name, email, code, password)


@shared_task
def send_reset_password_email(first_name, email, code):
    reset_password_email(first_name, email, code)


@shared_task
def send_reactivate_email_after_unsuccessful_login_attempts(first_name, email, code):
    reactivate_email_after_unsuccessful_login_attempts(first_name, email, code)

# ------------------------------------------------
# ------------------------------------------------
