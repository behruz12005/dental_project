from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),

    path(
        "api/contact/<int:contact_id>/checked/",
        views.contact_checked_api,
        name="contact_checked_api"
    ),
]