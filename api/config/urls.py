import django
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from django.shortcuts import redirect
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Base API')


def admin_login_redirect(request):
    return redirect('social:begin', backend='google-oauth2')


admin_login_path = settings.ADMIN_URL.rstrip('/') + '/login/'

urlpatterns = [
    # path('__debug__/', include('debug_toolbar.urls')), // For django debug toolbar

    # path(settings.ADMIN_URL, admin.site.urls), // without google login, with username and password
    path(admin_login_path, admin_login_redirect, name=f'{settings.ADMIN_URL}'),
    path(settings.ADMIN_URL, admin.site.urls),
    path('api/auth/', include('social_django.urls', namespace='social')),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),
    path('api/', include('core.urls')),
    path('api/', include('stripe_payment.urls')),
    path('api/', include('like.urls')),
    path('api/', include('chat.urls')),
    path('api/', include('app.urls')),
    path('api/swagger/', schema_view),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )
