from django.urls import path

from . import views


app_name = "doctor"

urlpatterns = [
    path("login/", views.login_view, name="login"),
    path("logout/", views.logout_view, name="logout"),
    path("clinic/setup/", views.clinic_setup, name="clinic_setup"),
    path("clinic/new/", views.clinic_create, name="clinic_create"),
    path("clinic/switch/", views.clinic_switch, name="clinic_switch"),
    path("", views.dashboard, name="dashboard"),
    path("customers/", views.customer_list, name="customer_list"),
    path("customers/new/", views.customer_create, name="customer_create"),
    path("customers/<int:pk>/edit/", views.customer_update, name="customer_update"),
    path("customers/<int:pk>/delete/", views.customer_delete, name="customer_delete"),
    path("customers/<int:pk>/reset/", views.customer_reset, name="customer_reset"),
    path("customers/<int:pk>/odontogram/", views.customer_odontogram, name="customer_odontogram"),
    path("customers/<int:pk>/odontogram/save/", views.customer_odontogram_save, name="customer_odontogram_save"),
    path("customers/<int:pk>/history/", views.customer_history_feed, name="customer_history_feed"),
    path("customers/<int:pk>/history/add/", views.customer_history_add, name="customer_history_add"),
    path("customers/<int:pk>/history/<int:history_id>/edit/", views.customer_history_update, name="customer_history_update"),
    path("staff/", views.staff_list, name="staff_list"),
    path("staff/<int:membership_id>/edit/", views.staff_edit, name="staff_edit"),
    path("calendar/", views.calendar_view, name="calendar"),
    path("calendar/events/", views.appointment_events, name="appointment_events"),
    path("calendar/events/create/", views.appointment_create, name="appointment_create"),
    path("calendar/events/<int:appointment_id>/update/", views.appointment_update, name="appointment_update"),
    path("calendar/events/<int:appointment_id>/delete/", views.appointment_delete, name="appointment_delete"),
]
