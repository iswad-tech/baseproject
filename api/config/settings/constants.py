import os
from pathlib import Path
from datetime import timedelta

LANGUAGE_CODE = 'en-us'

TIME_ZONE = os.environ.get('API_TIME_ZONE', 'America/Toronto')

USE_I18N = True

USE_TZ = True

BASE_DIR = Path(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))).parent.absolute()

DATA_UPLOAD_MAX_MEMORY_SIZE = 10485760  # 10Mb
FILE_UPLOAD_MAX_MEMORY_SIZE = 10485760  # 10Mb

STATIC_URL = '/static/static/'
MEDIA_URL = '/static/media/'

MEDIA_ROOT = './vol/media'
STATIC_ROOT = './vol/static'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'core.User'

INTERNAL_IPS = ['127.0.0.1', 'localhost']

ADMIN_URL = f"api/{os.environ.get('ADMIN_URL', 'supersecreturl')}/"

SITE_HEADER_NAME = os.environ.get('SITE_HEADER_NAME', 'Rest Api')

REST_FRAMEWORK = {
    'COERCE_DECIMAL_TO_STRING': False,
    # 'PAGE_SIZE': 10,
    # 'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema',
}

SIMPLE_JWT = {
    'AUTH_HEADER_TYPES': ('JWT',),
    'ACCESS_TOKEN_LIFETIME': timedelta(days=1),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
}

DJOSER = {
    'SERIALIZERS': {
        'user_create': 'core.serializers.UserCreateSerializer',
        'current_user': 'core.serializers.UserSerializer',
        'user': 'core.serializers.UserSerializer'
    },
}

SEND_ACTIVATION_EMAIL = bool(int(os.environ.get('SEND_ACTIVATION_EMAIL', 0)))

EMAIL_BACKEND = os.environ.get(
    'EMAIL_BACKEND', 'django.core.mail.backends.smtp.EmailBackend')
EMAIL_USE_TLS = os.environ.get('EMAIL_USE_TLS', False)
EMAIL_HOST = os.environ.get('EMAIL_HOST', 'smtp4dev')
EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER', '')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD', '')
EMAIL_PORT = os.environ.get('EMAIL_PORT', 25)
DEFAULT_FROM_EMAIL = os.environ.get(
    'DEFAULT_FROM_EMAIL', 'DEFAULT_FROM_EMAIL')

USE_CELERY = bool(int(os.environ.get('USE_CELERY', 0)))

# ----------------------- Stripe ----------------------------
STRIPE_SECRET_KEY = os.environ.get('STRIPE_SECRET_KEY', 'STRIPE_SECRET_KEY')
STRIPE_PAYMENT_INTENT_WEBHOOK_SECRET = os.environ.get(
    'STRIPE_PAYMENT_INTENT_WEBHOOK_SECRET', 'STRIPE_PAYMENT_INTENT_WEBHOOK_SECRET')
# ----------------------- Google Auth -----------------------
GOOGLE_AUTH_CLIENT_ID = os.environ.get(
    'GOOGLE_AUTH_CLIENT_ID', 'GOOGLE_AUTH_CLIENT_ID_CODE')
GOOGLE_AUTH_CLIENT_SECRET = os.environ.get(
    'GOOGLE_AUTH_CLIENT_SECRET', 'GOOGLE_AUTH_CLIENT_SECRET_CODE')
GOOGLE_OAUTH_REDIRECT_URI = os.environ.get(
    'GOOGLE_OAUTH_REDIRECT_URI', 'GOOGLE_OAUTH_REDIRECT_URI_CODE')
# -----------------------------------------------------------

# ----------------------- Microsoft Auth -----------------------
MICROSOFT_AUTH_CLIENT_ID = os.environ.get(
    'MICROSOFT_AUTH_CLIENT_ID', 'MICROSOFT_AUTH_CLIENT_ID_CODE')
MICROSOFT_AUTH_CLIENT_SECRET = os.environ.get(
    'MICROSOFT_AUTH_CLIENT_SECRET', 'MICROSOFT_AUTH_CLIENT_SECRET_CODE')
MICROSOFT_OAUTH_REDIRECT_URI = os.environ.get(
    'MICROSOFT_OAUTH_REDIRECT_URI', 'MICROSOFT_OAUTH_REDIRECT_URI_CODE')
# -----------------------------------------------------------

# ----------------------- Facebook Auth -----------------------
FACEBOOK_AUTH_CLIENT_ID = os.environ.get(
    'FACEBOOK_AUTH_CLIENT_ID', 'FACEBOOK_AUTH_CLIENT_ID_CODE')
FACEBOOK_AUTH_CLIENT_SECRET = os.environ.get(
    'FACEBOOK_AUTH_CLIENT_SECRET', 'FACEBOOK_AUTH_CLIENT_SECRET_CODE')
FACEBOOK_OAUTH_REDIRECT_URI = os.environ.get(
    'FACEBOOK_OAUTH_REDIRECT_URI', 'FACEBOOK_OAUTH_REDIRECT_URI_CODE')
# -----------------------------------------------------------

# ----------------------- SMTP SERVER -----------------------
USE_ACTUAL_SMTP_SERVER = os.environ.get(
    'USE_ACTUAL_SMTP_SERVER', 0)
if USE_ACTUAL_SMTP_SERVER:
    from sendgrid import SendGridAPIClient
    SG_SMTP = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
    USE_REAL_EMAIL_ADDRESSES = os.environ.get("USE_REAL_EMAIL_ADDRESSES", 0)
    RECEIVER_EMAIL_FOR_TEST = os.environ.get(
        "RECEIVER_EMAIL_FOR_TEST", "RECEIVER_EMAIL_FOR_TEST")
    EMAIL_ADDRESSES_FOR_TESTING = os.environ.get(
        'EMAIL_ADDRESSES_FOR_TESTING', '').split(',')

# ----------------------- GENERAL -----------------------
CLIENT_URL = os.environ.get(
    "CLIENT_URL", "CLIENT_URL")

# ----------------------- STORAGE -----------------------
STORAGE_ACCESS_KEY = os.environ.get(
    "STORAGE_ACCESS_KEY", "STORAGE_ACCESS_KEY")
STORAGE_SECRET_KEY = os.environ.get(
    "STORAGE_SECRET_KEY", "STORAGE_SECRET_KEY")
STORAGE_END_POINT_URL = os.environ.get(
    "STORAGE_END_POINT_URL", "STORAGE_END_POINT_URL")
STORAGE_END_POINT_CDN_URL = os.environ.get(
    "STORAGE_END_POINT_CDN_URL", "STORAGE_END_POINT_CDN_URL")

# ------------------- For django admin ------------------
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = os.environ.get(
    'GOOGLE_AUTH_CLIENT_ID', 'GOOGLE_AUTH_CLIENT_ID_CODE')
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = os.environ.get(
    'GOOGLE_AUTH_CLIENT_SECRET', 'GOOGLE_AUTH_CLIENT_SECRET_CODE')
SITE_ID = 1
LOGIN_URL = f'/api/{ADMIN_URL}'
LOGIN_REDIRECT_URL = f'/{ADMIN_URL}'
LOGOUT_REDIRECT_URL = '/'
