import json
from decimal import Decimal, InvalidOperation
from functools import wraps

from django.contrib import messages
from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.db import transaction
from django.db.models import Q, Sum
from django.http import HttpResponseForbidden, JsonResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.utils import timezone
from django.utils.dateparse import parse_datetime
from django.views.decorators.http import require_POST

from .forms import AppointmentForm, ClinicSetupForm, CustomerForm, LoginForm, StaffUserCreateForm
from .models import Appointment, Clinic, ClinicMembership, Customer, OdontogramToothHistory, OdontogramToothState


ALL_TOOTH_NUMBERS = [
    18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28,
    48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38,
]

VALID_TOOTH_SELECTION = {
    "none", "tooth-base", "milktooth", "implant", "tooth-crownprep", "tooth-under-gum", "no-tooth-after-extraction",
}
VALID_FILLING_MATERIAL = {"none", "amalgam", "composite", "gic", "temporary"}
VALID_ENDO = {"none", "endo-medical-filling", "endo-filling", "endo-filling-incomplete", "endo-glass-pin", "endo-metal-pin"}
VALID_MOBILITY = {"none", "m1", "m2", "m3"}
VALID_CARIES = {
    "caries-mesial",
    "caries-distal",
    "caries-buccal",
    "caries-lingual",
    "caries-occlusal",
    "caries-subcrown",
}
VALID_FILLING_SURFACES = {
    "buccal",
    "lingual",
    "mesial",
    "distal",
    "occlusal",
}

TOOTH_SELECTION_LABELS = {
    "none": "Tish yo'q",
    "tooth-base": "Doimiy tish",
    "milktooth": "Sut tish",
    "implant": "Implant",
    "tooth-crownprep": "Koronaga tayyorlangan tish",
    "tooth-under-gum": "Milk ostidagi tish",
    "no-tooth-after-extraction": "Olib tashlangan tish",
}
FILLING_MATERIAL_LABELS = {
    "none": "To'ldirish yo'q",
    "amalgam": "Amalgam",
    "composite": "Kompozit",
    "gic": "GIC",
    "temporary": "Vaqtinchalik",
}
ENDO_LABELS = {
    "none": "Sog'lom ildiz",
    "endo-medical-filling": "Dori bilan ildiz davolash",
    "endo-filling": "Ildiz to'ldirilgan",
    "endo-filling-incomplete": "To'liq bo'lmagan ildiz to'ldirish",
    "endo-glass-pin": "Shisha pin",
    "endo-metal-pin": "Metall pin",
}
MOBILITY_LABELS = {
    "none": "Hech biri",
    "m1": "1-daraja",
    "m2": "2-daraja",
    "m3": "3-daraja",
}
SURFACE_LABELS = {
    "caries-mesial": "mesial",
    "caries-distal": "distal",
    "caries-buccal": "yonoq",
    "caries-lingual": "til/tanglay",
    "caries-occlusal": "okklyuzion",
    "caries-subcrown": "toj osti",
}
FILLING_SURFACE_LABELS = {
    "buccal": "yonoq",
    "lingual": "til/tanglay",
    "mesial": "mesial",
    "distal": "distal",
    "occlusal": "okklyuzion",
}
EVENT_TYPE_LABELS = {
    "update": "Yangilanish",
    "treatment": "Davolash",
    "control": "Nazorat",
    "complaint": "Shikoyat",
    "note": "Izoh",
}

CURRENT_CLINIC_SESSION_KEY = "doctor_current_clinic_id"


def get_current_membership(user, session=None):
    if not user.is_authenticated:
        return None
    memberships = user.clinic_memberships.select_related("clinic").order_by("clinic__name", "id")
    clinic_id = None
    if session is not None:
        clinic_id = session.get(CURRENT_CLINIC_SESSION_KEY)
    if clinic_id:
        matched = memberships.filter(clinic_id=clinic_id).first()
        if matched:
            return matched
    return memberships.first()


def get_current_clinic(user, session=None):
    membership = get_current_membership(user, session=session)
    return membership.clinic if membership else None


def role_redirect(user):
    membership = get_current_membership(user)
    if membership:
        return "doctor:dashboard"
    return "doctor:clinic_setup"


def clinic_required(view_func):
    @wraps(view_func)
    @login_required
    def wrapped(request, *args, **kwargs):
        membership = get_current_membership(request.user, session=request.session)
        if not membership:
            return redirect("doctor:clinic_setup")
        request.clinic_membership = membership
        request.current_clinic = membership.clinic
        return view_func(request, *args, **kwargs)
    return wrapped


def owner_required(view_func):
    @wraps(view_func)
    @login_required
    def wrapped(request, *args, **kwargs):
        membership = get_current_membership(request.user, session=request.session)
        if not membership:
            return redirect("doctor:clinic_setup")
        if not membership.is_owner and not request.user.is_superuser:
            return HttpResponseForbidden("Bu bo'lim faqat stomatolog uchun.")
        request.clinic_membership = membership
        request.current_clinic = membership.clinic
        return view_func(request, *args, **kwargs)
    return wrapped


def get_customer_for_request(request, pk):
    return get_object_or_404(Customer, pk=pk, clinic=request.current_clinic)


def clinic_context(request, **extra):
    membership = getattr(request, "clinic_membership", get_current_membership(request.user, session=request.session))
    clinic = getattr(request, "current_clinic", membership.clinic if membership else None)
    can_edit_medical_records = bool(
        request.user.is_authenticated
        and (request.user.is_superuser or (membership and membership.is_owner))
    )
    memberships = list(request.user.clinic_memberships.select_related("clinic").order_by("clinic__name", "id")) if request.user.is_authenticated else []
    base = {
        "current_membership": membership,
        "current_clinic": clinic,
        "available_memberships": memberships,
        "can_manage_patients": can_edit_medical_records,
        "can_edit_medical_records": can_edit_medical_records,
        "can_manage_staff": can_edit_medical_records,
        "can_add_customers": bool(request.user.is_authenticated and membership),
    }
    base.update(extra)
    return base


def login_view(request):
    if request.user.is_authenticated:
        return redirect(role_redirect(request.user))

    form = LoginForm(request, data=request.POST or None)
    if request.method == "POST" and form.is_valid():
        login(request, form.get_user())
        return redirect(request.GET.get("next") or role_redirect(form.get_user()))

    return render(
        request,
        "doctor/login.html",
        {
            "form": form,
            "page_title": "Tizimga kirish",
        },
    )


@login_required
def logout_view(request):
    logout(request)
    return redirect("doctor:login")


@login_required
def clinic_setup(request):
    existing = get_current_membership(request.user)
    if existing:
        return redirect("doctor:dashboard")

    form = ClinicSetupForm(request.POST or None)
    if request.method == "POST" and form.is_valid():
        clinic = form.save(commit=False)
        clinic.created_by = request.user
        clinic.save()
        ClinicMembership.objects.create(
            clinic=clinic,
            user=request.user,
            role=ClinicMembership.ROLE_OWNER,
        )
        request.session[CURRENT_CLINIC_SESSION_KEY] = clinic.pk
        messages.success(request, "Klinika yaratildi va siz stomatolog sifatida biriktirildingiz.")
        return redirect("doctor:dashboard")

    return render(
        request,
        "doctor/clinic_setup.html",
        {
            "form": form,
            "page_title": "Klinikani sozlash",
            "page_heading": "Klinikani sozlash",
            "page_subtitle": "Avval klinika ma'lumotlarini yarating, keyin xodim va bemorlar bilan ishlaysiz.",
        },
    )


@owner_required
def clinic_create(request):
    form = ClinicSetupForm(request.POST or None)
    if request.method == "POST" and form.is_valid():
        clinic = form.save(commit=False)
        clinic.created_by = request.user
        clinic.save()
        ClinicMembership.objects.create(
            clinic=clinic,
            user=request.user,
            role=ClinicMembership.ROLE_OWNER,
        )
        request.session[CURRENT_CLINIC_SESSION_KEY] = clinic.pk
        messages.success(request, "Yangi klinika yaratildi va aktiv qilindi.")
        return redirect("doctor:dashboard")

    return render(
        request,
        "doctor/clinic_setup.html",
        clinic_context(
            request,
            form=form,
            page_title="Yangi klinika",
            page_heading="Yangi klinika",
            page_subtitle="Bir nechta klinika ochib, ular orasida almashishingiz mumkin.",
            clinic_setup_mode="additional",
        ),
    )


@clinic_required
@require_POST
def clinic_switch(request):
    clinic_id = request.POST.get("clinic_id")
    membership = request.user.clinic_memberships.filter(clinic_id=clinic_id).first()
    if not membership:
        return JsonResponse({"ok": False, "message": "Klinika topilmadi."}, status=404)
    request.session[CURRENT_CLINIC_SESSION_KEY] = membership.clinic_id
    redirect_url = request.POST.get("next") or request.META.get("HTTP_REFERER") or "/"
    if request.headers.get("x-requested-with") == "XMLHttpRequest":
        return JsonResponse({"ok": True, "redirectUrl": redirect_url})
    return redirect(redirect_url)


@clinic_required
def dashboard(request):
    clinic = request.current_clinic
    today = timezone.localdate()
    customers = clinic.customers.all()
    recent_customers = customers.order_by("-created_at")[:8]
    recent_history = OdontogramToothHistory.objects.filter(customer__clinic=clinic).select_related("customer")[:10]
    today_history = OdontogramToothHistory.objects.filter(customer__clinic=clinic, created_at__date=today)
    total_payments = (
        OdontogramToothHistory.objects.filter(customer__clinic=clinic)
        .exclude(payment_amount__isnull=True)
        .aggregate(total=Sum("payment_amount"))["total"]
        or Decimal("0")
    )
    today_payments = (
        OdontogramToothHistory.objects.filter(customer__clinic=clinic, created_at__date=today)
        .exclude(payment_amount__isnull=True)
        .aggregate(total=Sum("payment_amount"))["total"]
        or Decimal("0")
    )
    today_appointments = list(
        clinic.appointments.select_related("customer", "assigned_to")
        .filter(starts_at__date=today)
        .order_by("starts_at", "id")
    )
    staff_schedule = build_staff_schedule(today_appointments)

    context = clinic_context(
        request,
        page_title="Dashboard",
        page_heading=clinic.name,
        page_subtitle="Klinika boshqaruvi, bemorlar va qabul jadvali.",
        stats={
            "customers_total": customers.count(),
            "today_updates": today_history.count(),
            "today_customers": customers.filter(created_at__date=today).count(),
            "total_payments": format_payment_amount(total_payments),
            "today_payments": format_payment_amount(today_payments),
            "history_total": OdontogramToothHistory.objects.filter(customer__clinic=clinic).count(),
            "today_appointments": len(today_appointments),
            "clinics_total": request.user.clinic_memberships.count(),
        },
        recent_customers=recent_customers,
        recent_history=recent_history,
        today_appointments=today_appointments,
        staff_schedule=staff_schedule,
        can_create_clinic=request.user.is_superuser or (request.clinic_membership and request.clinic_membership.is_owner),
    )
    return render(request, "doctor/home.html", context)


@clinic_required
def customer_list(request):
    query = (request.GET.get("q") or "").strip()
    referred_by = (request.GET.get("referred_by") or "").strip()
    customers = request.current_clinic.customers.all().prefetch_related("tooth_states")
    if query:
        customers = customers.filter(
            Q(full_name__icontains=query)
            | Q(phone__icontains=query)
            | Q(address__icontains=query)
            | Q(complaint__icontains=query)
        )
    if referred_by:
        customers = customers.filter(referred_by=referred_by)
    customers = customers.order_by("-updated_at")
    return render(
        request,
        "doctor/customer_list.html",
        clinic_context(
            request,
            customers=customers,
            page_title="Mijozlar",
            page_heading="Mijozlar",
            page_subtitle="Barcha mijozlar va ularning odontogram sahifalari.",
            search_query=query,
            selected_referred_by=referred_by,
            referred_by_choices=Customer.REFERRAL_SOURCE_CHOICES,
        ),
    )


@clinic_required
def customer_create(request):
    form = CustomerForm(request.POST or None, request.FILES or None)
    if request.method == "POST" and form.is_valid():
        customer = form.save(commit=False)
        customer.clinic = request.current_clinic
        customer.save()
        messages.success(request, "Mijoz qo'shildi.")
        if request.clinic_membership.is_owner or request.user.is_superuser:
            return redirect("doctor:customer_odontogram", pk=customer.pk)
        return redirect("doctor:calendar")

    return render(
        request,
        "doctor/customer_form.html",
        clinic_context(
            request,
            form=form,
            page_title="Mijoz qo'shish",
            page_heading="Yangi mijoz",
            page_subtitle="Mijozning asosiy ma'lumotlarini kiriting.",
        ),
    )


@owner_required
def customer_update(request, pk):
    customer = get_customer_for_request(request, pk)
    form = CustomerForm(request.POST or None, request.FILES or None, instance=customer)
    if request.method == "POST" and form.is_valid():
        form.save()
        messages.success(request, "Mijoz ma'lumotlari yangilandi.")
        return redirect("doctor:customer_list")

    return render(
        request,
        "doctor/customer_form.html",
        clinic_context(
            request,
            form=form,
            customer=customer,
            page_title="Mijozni tahrirlash",
            page_heading="Mijozni tahrirlash",
            page_subtitle="Mijozning asosiy ma'lumotlarini yangilang.",
        ),
    )


@owner_required
def customer_delete(request, pk):
    customer = get_customer_for_request(request, pk)
    if request.method == "POST":
        customer.delete()
        messages.success(request, "Mijoz o'chirildi.")
        return redirect("doctor:customer_list")
    return render(
        request,
        "doctor/customer_confirm_delete.html",
        clinic_context(
            request,
            customer=customer,
            page_title="Mijozni o'chirish",
            page_heading="Mijozni o'chirish",
            page_subtitle="O'chirishdan oldin ma'lumotni yana bir bor tekshiring.",
        ),
    )


@owner_required
def customer_reset(request, pk):
    customer = get_customer_for_request(request, pk)
    if request.method == "POST":
        customer.tooth_states.all().delete()
        customer.wisdom_visible = True
        customer.show_base = True
        customer.occlusal_visible = True
        customer.show_healthy_pulp = True
        customer.edentulous = False
        customer.save(update_fields=[
            "wisdom_visible",
            "show_base",
            "occlusal_visible",
            "show_healthy_pulp",
            "edentulous",
            "updated_at",
        ])
        messages.success(request, "Odontogram holati tozalandi.")
        return redirect("doctor:customer_odontogram", pk=customer.pk)
    return render(
        request,
        "doctor/customer_confirm_reset.html",
        clinic_context(
            request,
            customer=customer,
            page_title="Odontogramni tozalash",
            page_heading="Odontogramni tozalash",
            page_subtitle="Mijoz kartasidagi belgilarni standart holatga qaytarish.",
        ),
    )


@clinic_required
def customer_odontogram(request, pk):
    customer = get_object_or_404(Customer.objects.prefetch_related("tooth_states"), pk=pk, clinic=request.current_clinic)
    initial_payload = build_customer_payload(customer)
    return render(
        request,
        "doctor/customer_odontogram.html",
        clinic_context(
            request,
            customer=customer,
            initial_payload=initial_payload,
            page_title=f"{customer.full_name} - Odontogram",
            page_heading=customer.full_name,
            page_subtitle="Odontogram, tarix va to'lov yozuvlari boshqaruvi.",
        ),
    )


@owner_required
@require_POST
def customer_odontogram_save(request, pk):
    customer = get_customer_for_request(request, pk)
    try:
        payload = json.loads(request.body.decode("utf-8"))
    except (json.JSONDecodeError, UnicodeDecodeError):
        return JsonResponse({"ok": False, "message": "JSON noto'g'ri."}, status=400)

    if not isinstance(payload, dict):
        return JsonResponse({"ok": False, "message": "Payload noto'g'ri."}, status=400)

    history_count = save_customer_payload(customer, payload)
    return JsonResponse({"ok": True, "message": "Odontogram saqlandi.", "historyCount": history_count})


@clinic_required
def customer_history_feed(request, pk):
    customer = get_customer_for_request(request, pk)
    tooth_no = parse_tooth_no(request.GET.get("tooth_no"))
    entries = customer.tooth_history.all()

    if tooth_no is not None:
        entries = entries.filter(tooth_no=tooth_no)[:25]
    else:
        entries = entries[:10]

    return JsonResponse({"ok": True, "toothNo": tooth_no, "items": [serialize_history_entry(entry) for entry in entries]})


@owner_required
@require_POST
def customer_history_add(request, pk):
    customer = get_customer_for_request(request, pk)
    parsed = parse_manual_history_request(request)
    if parsed["error"]:
        return JsonResponse({"ok": False, "message": parsed["error"]}, status=400)

    entry = OdontogramToothHistory.objects.create(
        customer=customer,
        tooth_no=parsed["tooth_no"],
        source="manual",
        event_type=parsed["event_type"],
        summary=parsed["summary"],
        details=parsed["note"],
        payment_amount=parsed["payment_amount"] if parsed["payment_amount"] is not None else None,
        payment_description=parsed["payment_description"],
        snapshot=parsed["snapshot"] or canonicalize_tooth_payload(serialize_tooth_state(customer.tooth_states.filter(tooth_no=parsed["tooth_no"]).first())),
        occurred_at=parsed["occurred_at"],
    )
    for index, uploaded in enumerate(parsed["files"][:3], start=1):
        setattr(entry, f"image_{index}", uploaded)
    if parsed["files"]:
        entry.save(update_fields=[*(f"image_{index}" for index in range(1, min(len(parsed["files"]), 3) + 1))])
    return JsonResponse({"ok": True, "item": serialize_history_entry(entry)})


@owner_required
@require_POST
def customer_history_update(request, pk, history_id):
    customer = get_customer_for_request(request, pk)
    entry = get_object_or_404(OdontogramToothHistory, pk=history_id, customer=customer)
    if entry.source != "manual":
        return JsonResponse({"ok": False, "message": "Faqat qo'lda yozilgan tarixni edit qilish mumkin."}, status=400)

    parsed = parse_manual_history_request(request)
    if parsed["error"]:
        return JsonResponse({"ok": False, "message": parsed["error"]}, status=400)

    entry.tooth_no = parsed["tooth_no"]
    entry.event_type = parsed["event_type"]
    entry.summary = parsed["summary"]
    entry.details = parsed["note"]
    entry.payment_amount = parsed["payment_amount"] if parsed["payment_amount"] is not None else None
    entry.payment_description = parsed["payment_description"]
    entry.snapshot = parsed["snapshot"] or entry.snapshot
    entry.occurred_at = parsed["occurred_at"]

    update_fields = [
        "tooth_no",
        "event_type",
        "summary",
        "details",
        "payment_amount",
        "payment_description",
        "snapshot",
        "occurred_at",
    ]

    if parsed["files"]:
        for field_name in ("image_1", "image_2", "image_3"):
            existing = getattr(entry, field_name)
            if existing:
                existing.delete(save=False)
            setattr(entry, field_name, None)
        for index, uploaded in enumerate(parsed["files"][:3], start=1):
            setattr(entry, f"image_{index}", uploaded)
        update_fields.extend(["image_1", "image_2", "image_3"])

    entry.save(update_fields=update_fields)
    return JsonResponse({"ok": True, "item": serialize_history_entry(entry), "message": "Tarix yozuvi yangilandi."})


@owner_required
def staff_list(request):
    clinic = request.current_clinic
    form = StaffUserCreateForm(request.POST or None)
    if request.method == "POST" and form.is_valid():
        user = form.save()
        ClinicMembership.objects.create(
            clinic=clinic,
            user=user,
            role=ClinicMembership.ROLE_STAFF,
        )
        messages.success(request, "Xodim user yaratildi.")
        return redirect("doctor:staff_list")

    memberships = clinic.memberships.select_related("user").order_by("role", "user__first_name", "user__username")
    return render(
        request,
        "doctor/staff_list.html",
        clinic_context(
            request,
            form=form,
            memberships=memberships,
            page_title="Xodimlar",
            page_heading="Xodimlar",
            page_subtitle="Klinika jadvali bilan ishlaydigan userlarni boshqaring.",
        ),
    )


@clinic_required
def calendar_view(request):
    clinic = request.current_clinic
    staff_queryset = get_clinic_users_queryset(clinic)
    form = AppointmentForm(
        user=request.user,
        membership=request.clinic_membership,
        clinic=clinic,
        staff_queryset=staff_queryset,
        customer_queryset=clinic.customers.order_by("full_name"),
    )
    return render(
        request,
        "doctor/calendar.html",
        clinic_context(
            request,
            form=form,
            staff_members=staff_queryset,
            customers=clinic.customers.order_by("full_name"),
            customer_search_items=build_customer_search_items(clinic.customers.order_by("full_name")),
            page_title="Qabul jadvali",
            page_heading="Qabul jadvali",
            page_subtitle="Bemorlarni kalendar orqali biriktiring va boshqaring.",
        ),
    )


@clinic_required
def appointment_events(request):
    clinic = request.current_clinic
    events = clinic.appointments.select_related("customer", "assigned_to")
    start = request.GET.get("start")
    end = request.GET.get("end")
    start_dt = clean_occurred_at(start) if start else None
    end_dt = clean_occurred_at(end) if end else None
    if start_dt:
        events = events.filter(ends_at__gte=start_dt)
    if end_dt:
        events = events.filter(starts_at__lte=end_dt)
    return JsonResponse([serialize_appointment_event(item) for item in events], safe=False)


@clinic_required
@require_POST
def appointment_create(request):
    clinic = request.current_clinic
    staff_queryset = get_clinic_users_queryset(clinic)
    form = AppointmentForm(
        request.POST,
        user=request.user,
        membership=request.clinic_membership,
        clinic=clinic,
        staff_queryset=staff_queryset,
        customer_queryset=clinic.customers.order_by("full_name"),
    )
    if not form.is_valid():
        return JsonResponse({"ok": False, "errors": form.errors}, status=400)
    appointment = form.save(commit=False)
    duration_minutes = form.cleaned_data["duration_minutes"]
    appointment.clinic = clinic
    appointment.created_by = request.user
    if not request.clinic_membership.is_owner and not request.user.is_superuser:
        appointment.assigned_to = request.user
    appointment.title = build_appointment_title(appointment.customer, appointment.assigned_to)
    appointment.ends_at = appointment.starts_at + timezone.timedelta(minutes=duration_minutes)
    appointment.save()
    return JsonResponse({"ok": True, "event": serialize_appointment_event(appointment)})


@clinic_required
@require_POST
def appointment_update(request, appointment_id):
    clinic = request.current_clinic
    appointment = get_object_or_404(Appointment, pk=appointment_id, clinic=clinic)
    staff_queryset = get_clinic_users_queryset(clinic)
    form = AppointmentForm(
        request.POST,
        instance=appointment,
        user=request.user,
        membership=request.clinic_membership,
        clinic=clinic,
        staff_queryset=staff_queryset,
        customer_queryset=clinic.customers.order_by("full_name"),
    )
    if not form.is_valid():
        return JsonResponse({"ok": False, "errors": form.errors}, status=400)
    appointment = form.save(commit=False)
    duration_minutes = form.cleaned_data["duration_minutes"]
    if not request.clinic_membership.is_owner and not request.user.is_superuser:
        appointment.assigned_to = request.user
    appointment.title = build_appointment_title(appointment.customer, appointment.assigned_to)
    appointment.ends_at = appointment.starts_at + timezone.timedelta(minutes=duration_minutes)
    appointment.save()
    return JsonResponse({"ok": True, "event": serialize_appointment_event(appointment)})


@clinic_required
@require_POST
def appointment_delete(request, appointment_id):
    clinic = request.current_clinic
    appointment = get_object_or_404(Appointment, pk=appointment_id, clinic=clinic)
    appointment.delete()
    return JsonResponse({"ok": True})


def build_customer_payload(customer):
    tooth_map = {row.tooth_no: row for row in customer.tooth_states.all()}
    teeth = {}
    for tooth_no in ALL_TOOTH_NUMBERS:
        row = tooth_map.get(tooth_no)
        teeth[str(tooth_no)] = serialize_tooth_state(row)
    return {
        "version": "1.3",
        "globals": {
            "wisdomVisible": customer.wisdom_visible,
            "showBase": customer.show_base,
            "occlusalVisible": customer.occlusal_visible,
            "showHealthyPulp": customer.show_healthy_pulp,
            "edentulous": customer.edentulous,
        },
        "teeth": teeth,
    }


def serialize_tooth_state(row):
    if row is None:
        return {
            "toothSelection": "tooth-base",
            "pulpInflam": False,
            "endoResection": False,
            "mods": [],
            "endo": "none",
            "caries": [],
            "fillingMaterial": "none",
            "fillingSurfaces": [],
            "fissureSealing": False,
            "contactMesial": False,
            "contactDistal": False,
            "bruxismWear": False,
            "bruxismNeckWear": False,
            "brokenMesial": False,
            "brokenIncisal": False,
            "brokenDistal": False,
            "extractionWound": False,
            "extractionPlan": False,
            "parapulpalPin": False,
            "crownReplace": False,
            "crownNeeded": False,
            "missingClosed": False,
            "bridgePillar": False,
            "bridgeUnit": "none",
            "mobility": "none",
            "crownMaterial": "natural",
        }

    mods = []
    if row.periodontal_inflammation:
        mods.append("parodontal")
    if row.periapical_inflammation:
        mods.append("inflammation")

    caries = []
    if row.caries_mesial:
        caries.append("caries-mesial")
    if row.caries_distal:
        caries.append("caries-distal")
    if row.caries_buccal:
        caries.append("caries-buccal")
    if row.caries_lingual:
        caries.append("caries-lingual")
    if row.caries_occlusal:
        caries.append("caries-occlusal")
    if row.caries_subcrown:
        caries.append("caries-subcrown")

    return {
        "toothSelection": row.tooth_selection,
        "pulpInflam": row.pulp_inflam,
        "endoResection": row.endo_resection,
        "mods": mods,
        "endo": row.endo,
        "caries": caries,
        "fillingMaterial": row.filling_material,
        "fillingSurfaces": build_filling_surfaces(row),
        "fissureSealing": row.fissure_sealing,
        "contactMesial": False,
        "contactDistal": False,
        "bruxismWear": False,
        "bruxismNeckWear": False,
        "brokenMesial": False,
        "brokenIncisal": False,
        "brokenDistal": False,
        "extractionWound": False,
        "extractionPlan": False,
        "parapulpalPin": row.parapulpal_pin,
        "crownReplace": False,
        "crownNeeded": False,
        "missingClosed": False,
        "bridgePillar": False,
        "bridgeUnit": "none",
        "mobility": row.mobility,
        "crownMaterial": "natural",
    }


@transaction.atomic
def save_customer_payload(customer, payload):
    globals_data = payload.get("globals") or {}
    customer.wisdom_visible = bool(globals_data.get("wisdomVisible", True))
    customer.show_base = bool(globals_data.get("showBase", True))
    customer.occlusal_visible = bool(globals_data.get("occlusalVisible", True))
    customer.show_healthy_pulp = bool(globals_data.get("showHealthyPulp", True))
    customer.edentulous = bool(globals_data.get("edentulous", False))
    customer.save(update_fields=[
        "wisdom_visible",
        "show_base",
        "occlusal_visible",
        "show_healthy_pulp",
        "edentulous",
        "updated_at",
    ])

    existing_rows = {row.tooth_no: row for row in customer.tooth_states.all()}
    teeth_payload = payload.get("teeth") or {}
    history_rows = []
    new_rows = []

    for tooth_no in ALL_TOOTH_NUMBERS:
        previous = canonicalize_tooth_payload(serialize_tooth_state(existing_rows.get(tooth_no)))
        raw = teeth_payload.get(str(tooth_no), {})
        raw = raw if isinstance(raw, dict) else {}
        current = canonicalize_tooth_payload(raw)

        if current != previous:
            summary, details = build_history_change_text(tooth_no, previous, current)
            history_rows.append(
                OdontogramToothHistory(
                    customer=customer,
                    tooth_no=tooth_no,
                    source="auto",
                    event_type="update",
                    summary=summary,
                    details=details,
                    snapshot=current,
                    occurred_at=timezone.now(),
                )
            )

        new_rows.append(
            OdontogramToothState(
                customer=customer,
                tooth_no=tooth_no,
                tooth_selection=current["toothSelection"],
                filling_material=current["fillingMaterial"],
                endo=current["endo"],
                mobility=current["mobility"],
                caries_mesial="caries-mesial" in current["caries"],
                caries_distal="caries-distal" in current["caries"],
                caries_buccal="caries-buccal" in current["caries"],
                caries_lingual="caries-lingual" in current["caries"],
                caries_occlusal="caries-occlusal" in current["caries"],
                caries_subcrown="caries-subcrown" in current["caries"],
                fissure_sealing=current["fissureSealing"],
                filling_buccal="buccal" in current["fillingSurfaces"],
                filling_lingual="lingual" in current["fillingSurfaces"],
                filling_mesial="mesial" in current["fillingSurfaces"],
                filling_distal="distal" in current["fillingSurfaces"],
                filling_occlusal="occlusal" in current["fillingSurfaces"],
                pulp_inflam=current["pulpInflam"],
                endo_resection=current["endoResection"],
                parapulpal_pin=current["parapulpalPin"],
                periodontal_inflammation=current["periodontalInflammation"],
                periapical_inflammation=current["periapicalInflammation"],
            )
        )

    customer.tooth_states.all().delete()
    OdontogramToothState.objects.bulk_create(new_rows)
    if history_rows:
        OdontogramToothHistory.objects.bulk_create(history_rows)
    return len(history_rows)


def canonicalize_tooth_payload(raw):
    caries = [item for item in ensure_list(raw.get("caries")) if item in VALID_CARIES]
    caries = sorted(set(caries))
    mods = ensure_list(raw.get("mods"))
    filling_surfaces = [item for item in ensure_list(raw.get("fillingSurfaces")) if item in VALID_FILLING_SURFACES]
    filling_surfaces = sorted(set(filling_surfaces))
    return {
        "toothSelection": clean_enum(raw.get("toothSelection"), VALID_TOOTH_SELECTION, "tooth-base"),
        "fillingMaterial": clean_enum(raw.get("fillingMaterial"), VALID_FILLING_MATERIAL, "none"),
        "endo": clean_enum(raw.get("endo"), VALID_ENDO, "none"),
        "mobility": clean_enum(raw.get("mobility"), VALID_MOBILITY, "none"),
        "caries": caries,
        "fillingSurfaces": filling_surfaces,
        "fissureSealing": bool(raw.get("fissureSealing")),
        "pulpInflam": bool(raw.get("pulpInflam")),
        "endoResection": bool(raw.get("endoResection")),
        "parapulpalPin": bool(raw.get("parapulpalPin")),
        "periodontalInflammation": "parodontal" in mods,
        "periapicalInflammation": "inflammation" in mods,
    }


def build_history_change_text(tooth_no, previous, current):
    changes = []
    if previous["toothSelection"] != current["toothSelection"]:
        changes.append(
            f"Baza: {enum_label(TOOTH_SELECTION_LABELS, previous['toothSelection'])} -> "
            f"{enum_label(TOOTH_SELECTION_LABELS, current['toothSelection'])}"
        )
    if previous["caries"] != current["caries"]:
        changes.append(f"Kariyes: {surface_list_label(previous['caries'])} -> {surface_list_label(current['caries'])}")
    if previous["fillingMaterial"] != current["fillingMaterial"]:
        changes.append(
            f"Plomba turi: {enum_label(FILLING_MATERIAL_LABELS, previous['fillingMaterial'])} -> "
            f"{enum_label(FILLING_MATERIAL_LABELS, current['fillingMaterial'])}"
        )
    if previous["fillingSurfaces"] != current["fillingSurfaces"]:
        changes.append(
            f"Plomba yuzalari: {filling_surface_list_label(previous['fillingSurfaces'])} -> "
            f"{filling_surface_list_label(current['fillingSurfaces'])}"
        )
    if previous["fissureSealing"] != current["fissureSealing"]:
        changes.append(bool_change_text("Yoriqni muhrlash", current["fissureSealing"]))
    if previous["endo"] != current["endo"]:
        changes.append(f"Ildiz: {enum_label(ENDO_LABELS, previous['endo'])} -> {enum_label(ENDO_LABELS, current['endo'])}")
    if previous["pulpInflam"] != current["pulpInflam"]:
        changes.append(bool_change_text("Pulpit", current["pulpInflam"]))
    if previous["endoResection"] != current["endoResection"]:
        changes.append(bool_change_text("Rezeksiya qilingan tish", current["endoResection"]))
    if previous["parapulpalPin"] != current["parapulpalPin"]:
        changes.append(bool_change_text("Parapulpal igna", current["parapulpalPin"]))
    if previous["mobility"] != current["mobility"]:
        changes.append(
            f"Harakatchanlik: {enum_label(MOBILITY_LABELS, previous['mobility'])} -> "
            f"{enum_label(MOBILITY_LABELS, current['mobility'])}"
        )
    if previous["periodontalInflammation"] != current["periodontalInflammation"]:
        changes.append(bool_change_text("Periodontal yallig'lanish", current["periodontalInflammation"]))
    if previous["periapicalInflammation"] != current["periapicalInflammation"]:
        changes.append(bool_change_text("Periapikal yallig'lanish", current["periapicalInflammation"]))

    details = "; ".join(changes) if changes else "Holat yangilandi."
    summary = f"{tooth_no}-tish holati yangilandi"
    return summary, details


def serialize_history_entry(entry):
    images = []
    for field_name in ("image_1", "image_2", "image_3"):
        file_obj = getattr(entry, field_name)
        if file_obj:
            images.append(file_obj.url)
    payment_amount = format_payment_amount(entry.payment_amount)
    has_payment = bool(payment_amount)
    has_description = bool((entry.payment_description or "").strip() or (entry.details or "").strip())
    has_change = entry.source == "auto" or entry.event_type in {"update", "treatment", "control", "complaint"}
    return {
        "id": entry.pk,
        "toothNo": entry.tooth_no,
        "source": entry.source,
        "eventType": entry.event_type,
        "eventTypeLabel": EVENT_TYPE_LABELS.get(entry.event_type, entry.event_type),
        "summary": entry.summary,
        "details": entry.details,
        "paymentAmount": payment_amount,
        "paymentDescription": entry.payment_description,
        "hasPayment": has_payment,
        "hasDescription": has_description,
        "hasChange": has_change,
        "snapshot": entry.snapshot,
        "images": images,
        "occurredAtLabel": timezone.localtime(entry.occurred_at).strftime("%d.%m.%Y %H:%M"),
        "createdAt": entry.created_at.isoformat(),
        "createdAtLabel": timezone.localtime(entry.created_at).strftime("%d.%m.%Y %H:%M"),
    }


def serialize_appointment_event(item):
    customer_name = item.customer.full_name if item.customer else ""
    customer_phone = item.customer.phone if item.customer else ""
    doctor_name = item.assigned_to.get_full_name().strip() or item.assigned_to.username if item.assigned_to else ""
    title = item.title
    if customer_name:
        title = customer_name
    return {
        "id": item.pk,
        "title": title,
        "start": timezone.localtime(item.starts_at).isoformat(),
        "end": timezone.localtime(item.ends_at).isoformat(),
        "color": item.color or "#0e7490",
        "backgroundColor": item.color or "#0e7490",
        "borderColor": item.color or "#0e7490",
        "textColor": "#ffffff",
        "extendedProps": {
            "customerId": item.customer_id,
            "customerName": customer_name,
            "customerPhone": customer_phone,
            "assignedToId": item.assigned_to_id,
            "assignedTo": doctor_name,
            "actualTitle": item.title,
            "notes": item.notes,
            "status": item.status,
            "statusLabel": item.get_status_display(),
            "color": item.color,
            "durationMinutes": int((item.ends_at - item.starts_at).total_seconds() // 60),
        },
    }


def get_clinic_users_queryset(clinic):
    return User.objects.filter(clinic_memberships__clinic=clinic, is_active=True).distinct()


def build_appointment_title(customer, assigned_to):
    customer_name = customer.full_name if customer else "Qabul"
    if assigned_to:
        doctor_name = assigned_to.get_full_name().strip() or assigned_to.username
        return f"{customer_name} / {doctor_name}"
    return customer_name


def build_customer_search_items(customers):
    items = []
    for customer in customers:
        items.append(
            {
                "id": customer.pk,
                "label": customer.full_name,
                "name": customer.full_name,
                "phone": customer.phone or "",
            }
        )
    return items


def build_staff_schedule(appointments):
    grouped = {}
    for item in appointments:
        user = item.assigned_to
        key = user.pk if user else 0
        if key not in grouped:
            grouped[key] = {
                "name": (user.get_full_name().strip() or user.username) if user else "Biriktirilmagan",
                "items": [],
            }
        grouped[key]["items"].append(item)
    return list(grouped.values())


def parse_tooth_no(value):
    try:
        tooth_no = int(value)
    except (TypeError, ValueError):
        return None
    return tooth_no if tooth_no in ALL_TOOTH_NUMBERS else None


def enum_label(label_map, value):
    return label_map.get(value, value or "yo'q")


def surface_list_label(values):
    if not values:
        return "yo'q"
    return ", ".join(SURFACE_LABELS.get(item, item) for item in values)


def filling_surface_list_label(values):
    if not values:
        return "yo'q"
    return ", ".join(FILLING_SURFACE_LABELS.get(item, item) for item in values)


def bool_change_text(label, enabled):
    return f"{label}: {'belgilandi' if enabled else 'olib tashlandi'}"


def clean_event_type(value):
    allowed = {choice[0] for choice in OdontogramToothHistory.EVENT_TYPE_CHOICES}
    if value in allowed:
        return value
    return "note"


def clean_occurred_at(value):
    if not value:
        return timezone.now()
    parsed = parse_datetime(value)
    if parsed is None:
        return timezone.now()
    if timezone.is_naive(parsed):
        return timezone.make_aware(parsed, timezone.get_current_timezone())
    return parsed


def build_manual_summary(tooth_no, note, payment_amount=None, payment_description=""):
    if payment_amount not in (None, ""):
        return f"{tooth_no}-tish to'lovi: {format_payment_amount(payment_amount)}"
    base_text = payment_description or note
    short = " ".join(base_text.split())
    if len(short) > 70:
        short = short[:67].rstrip() + "..."
    return f"{tooth_no}-tish: {short}"


def clean_payment_amount(value):
    if value in (None, ""):
        return None
    normalized = str(value).replace(" ", "").replace(",", ".")
    try:
        amount = Decimal(normalized)
    except (InvalidOperation, ValueError):
        return False
    if amount < 0:
        return False
    return amount.quantize(Decimal("0.01"))


def format_payment_amount(value):
    if value in (None, ""):
        return ""
    normalized = format(Decimal(value).normalize(), "f")
    if "." in normalized:
        normalized = normalized.rstrip("0").rstrip(".")
    return normalized


def parse_manual_history_request(request):
    tooth_no = parse_tooth_no(request.POST.get("tooth_no"))
    note = str(request.POST.get("details") or "").strip()
    summary = str(request.POST.get("summary") or "").strip()
    event_type = clean_event_type(request.POST.get("event_type"))
    occurred_at = clean_occurred_at(request.POST.get("occurred_at"))
    payment_amount = clean_payment_amount(request.POST.get("payment_amount"))
    payment_description = str(request.POST.get("payment_description") or "").strip()
    snapshot = {}
    snapshot_raw = request.POST.get("snapshot")
    if snapshot_raw:
        try:
            parsed_snapshot = json.loads(snapshot_raw)
            if isinstance(parsed_snapshot, dict):
                snapshot = parsed_snapshot
        except json.JSONDecodeError:
            snapshot = {}

    if tooth_no is None:
        return {"error": "Tish tanlanmagan."}
    if payment_amount is False:
        return {"error": "To'lov summasi noto'g'ri."}
    if not note and not payment_description and payment_amount in (None, ""):
        return {"error": "Izoh yoki to'lov ma'lumoti kiriting."}

    if not summary:
        summary = build_manual_summary(tooth_no, note, payment_amount, payment_description)

    files = request.FILES.getlist("images")
    if len(files) > 3:
        return {"error": "Ko'pi bilan 3 ta rasm yuklash mumkin."}
    if any(not (uploaded.content_type or "").startswith("image/") for uploaded in files):
        return {"error": "Faqat rasm fayllarini yuklang."}

    return {
        "error": "",
        "tooth_no": tooth_no,
        "note": note,
        "summary": summary,
        "event_type": event_type,
        "occurred_at": occurred_at,
        "payment_amount": payment_amount,
        "payment_description": payment_description,
        "snapshot": snapshot,
        "files": files,
    }


def clean_enum(value, allowed, fallback):
    if isinstance(value, str) and value in allowed:
        return value
    return fallback


def ensure_list(values):
    return values if isinstance(values, list) else []


def build_filling_surfaces(row):
    surfaces = []
    if row.filling_buccal:
        surfaces.append("buccal")
    if row.filling_lingual:
        surfaces.append("lingual")
    if row.filling_mesial:
        surfaces.append("mesial")
    if row.filling_distal:
        surfaces.append("distal")
    if row.filling_occlusal:
        surfaces.append("occlusal")
    return surfaces
