from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import RedirectView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("login/", RedirectView.as_view(pattern_name="doctor:login", permanent=False)),
    path("", include("clinic.urls")),
    path("doctor/", include("doctor.urls")),
]

if settings.DEBUG:
    urlpatterns = static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0]) + urlpatterns
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
