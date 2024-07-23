from templated_email import send_templated_mail
from django.core.mail import BadHeaderError
from django.conf import settings
from sendgrid.helpers.mail import Mail

from core.helpers.sendgrid_templates import SG_TEMPLATE_IDS

FROM_EMAIL = "info@iswad.tech"


def send_email(email, params, email_template_id, email_template_name):
    try:
        if bool(int(settings.USE_ACTUAL_SMTP_SERVER)):
            if bool(int(settings.USE_REAL_EMAIL_ADDRESSES)):
                try:
                    message = Mail(from_email=FROM_EMAIL, to_emails=[email])
                    message.dynamic_template_data = params
                    message.template_id = email_template_id
                    res = settings.SG_SMTP.send(message)
                except Exception as e:
                    print(e)
            else:
                try:
                    if email in settings.EMAIL_ADDRESSES_FOR_TESTING:
                        message = Mail(from_email=FROM_EMAIL,
                                       to_emails=[email])
                        message.dynamic_template_data = params
                        message.template_id = email_template_id
                    else:
                        message = Mail(from_email=FROM_EMAIL,
                                       to_emails=[settings.RECEIVER_EMAIL_FOR_TEST])
                        message.dynamic_template_data = params
                        message.template_id = email_template_id
                    res = settings.SG_SMTP.send(message)
                except Exception as e:
                    print(e)
        else:
            if email_template_name:
                send_templated_mail(
                    template_name=email_template_name,
                    from_email=FROM_EMAIL,
                    recipient_list=[email],
                    context=params,
                )
    except BadHeaderError as e:
        print(e)
    return

# ----------------------------------------------
# ----------------------------------------------
# ----------------------------------------------
