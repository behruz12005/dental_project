from django.contrib import admin

from .models import Appointment, Clinic, ClinicMembership, Customer, OdontogramToothHistory, OdontogramToothState


@admin.register(Clinic)
class ClinicAdmin(admin.ModelAdmin):
    list_display = ("name", "phone", "created_by", "updated_at")
    search_fields = ("name", "phone", "address")


@admin.register(ClinicMembership)
class ClinicMembershipAdmin(admin.ModelAdmin):
    list_display = (
        "clinic",
        "user",
        "role",
        "can_view_dashboard",
        "can_view_customers",
        "can_add_customers",
        "can_view_calendar",
        "can_edit_medical_records",
        "can_manage_staff",
        "created_at",
    )
    list_filter = (
        "role",
        "clinic",
        "can_view_dashboard",
        "can_view_customers",
        "can_add_customers",
        "can_view_calendar",
        "can_edit_medical_records",
        "can_manage_staff",
    )
    search_fields = ("clinic__name", "user__username", "user__first_name", "user__last_name")


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ("full_name", "phone", "referred_by", "arrived_at", "updated_at")
    list_filter = ("referred_by", "has_allergy", "has_chronic_disease", "arrived_at")
    search_fields = ("full_name", "phone", "address", "complaint")


@admin.register(OdontogramToothState)
class OdontogramToothStateAdmin(admin.ModelAdmin):
    list_display = ("customer", "tooth_no", "tooth_selection", "endo", "filling_material", "mobility")
    list_filter = ("tooth_selection", "endo", "filling_material", "mobility")
    search_fields = ("customer__full_name",)


@admin.register(OdontogramToothHistory)
class OdontogramToothHistoryAdmin(admin.ModelAdmin):
    list_display = ("customer", "tooth_no", "source", "event_type", "summary", "payment_amount", "occurred_at", "created_at")
    list_filter = ("source", "event_type", "created_at")
    search_fields = ("customer__full_name", "summary", "details")


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ("clinic", "title", "customer", "assigned_to", "starts_at", "ends_at", "status")
    list_filter = ("clinic", "status", "starts_at")
    search_fields = ("title", "customer__full_name", "assigned_to__username")
