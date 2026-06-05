from django.contrib import admin
from .models import ContactRequest


@admin.register(ContactRequest)
class ContactRequestAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "phone",
        "status",
        "is_checked",
        "created_at",
    )

    list_filter = (
        "status",
        "is_checked",
        "created_at",
    )

    search_fields = (
        "name",
        "phone",
        "message",
        "operator_note",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )