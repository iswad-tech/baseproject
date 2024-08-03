from django.conf import settings
from django.contrib import admin

from app.models import ContactFormModel, WebSubscriberModel, UploadedMediaModel, BlogModel, LabelModel, BlogLabelModel, CourseModel
from . import contact_form_admin, web_subscriber_admin, uploaded_media_admin, blog_admin, course_admin

admin.site.register(ContactFormModel, contact_form_admin.ContactFormAdmin)

admin.site.register(WebSubscriberModel,
                    web_subscriber_admin.WebSubscriberAdmin)

admin.site.register(UploadedMediaModel,
                    uploaded_media_admin.UploadedMediaAdmin)

admin.site.register(BlogModel, blog_admin.BlogAdmin)
admin.site.register(LabelModel, blog_admin.LabelAdmin)
admin.site.register(BlogLabelModel, blog_admin.BlogLabelAdmin)

admin.site.register(CourseModel, course_admin.CourseAdmin)
