from django.conf import settings
from django.contrib import messages
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt

from .models import ContactRequest
from .telegram_utils import send_contact_to_telegram


def home(request):
    if request.method == "POST":
        name = request.POST.get("name", "").strip()
        phone = request.POST.get("phone", "").strip()
        message = request.POST.get("message", "").strip()

        if len(name) < 2:
            messages.error(request, "Ismingizni to‘liq kiriting.")
            return redirect("home")

        if len(phone) < 7:
            messages.error(request, "Telefon raqamni to‘g‘ri kiriting.")
            return redirect("home")

        contact = ContactRequest.objects.create(
            name=name,
            phone=phone,
            message=message,
        )

        send_contact_to_telegram(contact)

        messages.success(
            request,
            "So‘rovingiz qabul qilindi. Tez orada siz bilan bog‘lanamiz."
        )
        return redirect("home")

    return render(request, "clinic/home.html", {})


@csrf_exempt
def contact_checked_api(request, contact_id):
    if request.method != "POST":
        return JsonResponse({
            "ok": False,
            "error": "Faqat POST kerak"
        }, status=405)

    secret = request.POST.get("secret", "")

    if secret != settings.TELEGRAM_SECRET_KEY:
        return JsonResponse({
            "ok": False,
            "error": "Secret noto‘g‘ri"
        }, status=403)

    try:
        contact = ContactRequest.objects.get(id=contact_id)
    except ContactRequest.DoesNotExist:
        return JsonResponse({
            "ok": False,
            "error": "Contact topilmadi"
        }, status=404)

    contact.is_checked = True
    contact.save(update_fields=["is_checked", "updated_at"])

    return JsonResponse({
        "ok": True,
        "contact_id": contact.id,
        "is_checked": contact.is_checked,
        "message": "Tekshirildi qilib belgilandi"
    })