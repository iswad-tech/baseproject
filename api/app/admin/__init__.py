from django.conf import settings
from django.contrib import admin

from app.models import ContactFormModel
from . import contact_form_admin

admin.site.register(ContactFormModel, contact_form_admin.ContactFormAdmin)
