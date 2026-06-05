from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone


def tooth_history_upload_to(instance, filename):
    return f"tooth-history/customer-{instance.customer_id}/{timezone.now():%Y/%m}/{filename}"


def customer_photo_upload_to(instance, filename):
    return f"customer-photos/customer-{instance.pk or 'new'}/{timezone.now():%Y/%m}/{filename}"


class Clinic(models.Model):
    name = models.CharField("Klinika nomi", max_length=180)
    phone = models.CharField("Telefon", max_length=30, blank=True)
    address = models.TextField("Manzil", blank=True)
    created_by = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        related_name="created_clinics",
        null=True,
        blank=True,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["name", "-created_at"]
        verbose_name = "Klinika"
        verbose_name_plural = "Klinikalar"

    def __str__(self):
        return self.name


class ClinicMembership(models.Model):
    ROLE_OWNER = "owner"
    ROLE_STAFF = "staff"
    ROLE_CHOICES = [
        (ROLE_OWNER, "Stomatolog"),
        (ROLE_STAFF, "Xodim"),
    ]

    clinic = models.ForeignKey(Clinic, on_delete=models.CASCADE, related_name="memberships")
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="clinic_memberships")
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default=ROLE_STAFF)
    can_view_dashboard = models.BooleanField("Dashboard", default=True)
    can_view_customers = models.BooleanField("Mijozlar ro'yxati", default=True)
    can_add_customers = models.BooleanField("Mijoz qo'shish", default=True)
    can_view_calendar = models.BooleanField("Qabul jadvali", default=True)
    can_edit_medical_records = models.BooleanField("Tibbiy kartani tahrirlash", default=False)
    can_manage_staff = models.BooleanField("Xodimlarni boshqarish", default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("clinic", "user")
        ordering = ["clinic__name", "user__username"]
        verbose_name = "Klinika a'zosi"
        verbose_name_plural = "Klinika a'zolari"

    def __str__(self):
        return f"{self.clinic.name} - {self.user.username} - {self.get_role_display()}"

    @property
    def is_owner(self):
        return self.role == self.ROLE_OWNER

    def has_page_permission(self, permission_name):
        if self.is_owner:
            return True
        return bool(getattr(self, permission_name, False))


class Customer(models.Model):
    REFERRAL_SOURCE_CHOICES = [
        ("instagram", "Instagram"),
        ("website", "Website"),
        ("telegram", "Telegram"),
        ("friend", "Tanishi orqali"),
        ("doctor", "Shifokor tavsiyasi"),
        ("returning", "Oldingi mijoz"),
        ("other", "Boshqa"),
    ]

    full_name = models.CharField("F.I.SH.", max_length=150)
    profile_image = models.FileField("Rasmi", upload_to=customer_photo_upload_to, blank=True)
    phone = models.CharField("Telefon", max_length=30, blank=True)
    birth_date = models.DateField("Tug'ilgan sana", blank=True, null=True)
    address = models.TextField("Manzil", blank=True)
    latitude = models.DecimalField("Latitude", max_digits=9, decimal_places=6, blank=True, null=True)
    longitude = models.DecimalField("Longitude", max_digits=9, decimal_places=6, blank=True, null=True)
    complaint = models.TextField("Shikoyati", blank=True)
    has_allergy = models.BooleanField("Allergiyasi bormi", default=False)
    allergy_details = models.TextField("Allergiya tafsiloti", blank=True)
    has_chronic_disease = models.BooleanField("Surunkali kasalligi bormi", default=False)
    chronic_disease_details = models.TextField("Surunkali kasallik tafsiloti", blank=True)
    arrived_at = models.DateTimeField("Qachon kelgan", default=timezone.now)
    referred_by = models.CharField(
        "Kim tavsiya qilgan",
        max_length=20,
        choices=REFERRAL_SOURCE_CHOICES,
        default="instagram",
    )
    note = models.TextField("Izoh", blank=True)
    clinic = models.ForeignKey(
        Clinic,
        on_delete=models.CASCADE,
        related_name="customers",
        verbose_name="Klinika",
        null=True,
        blank=True,
    )

    wisdom_visible = models.BooleanField(default=True)
    show_base = models.BooleanField(default=True)
    occlusal_visible = models.BooleanField(default=True)
    show_healthy_pulp = models.BooleanField(default=True)
    edentulous = models.BooleanField(default=False)

    created_at = models.DateTimeField("Yaratilgan vaqt", auto_now_add=True)
    updated_at = models.DateTimeField("O'zgartirilgan vaqt", auto_now=True)

    class Meta:
        ordering = ["full_name", "-created_at"]
        verbose_name = "Mijoz"
        verbose_name_plural = "Mijozlar"

    def __str__(self):
        return self.full_name

    @property
    def age(self):
        if not self.birth_date:
            return None
        today = timezone.localdate()
        years = today.year - self.birth_date.year
        if (today.month, today.day) < (self.birth_date.month, self.birth_date.day):
            years -= 1
        return max(years, 0)


class OdontogramToothState(models.Model):
    TOOTH_SELECTION_CHOICES = [
        ("none", "Tish yo'q"),
        ("tooth-base", "Doimiy tish"),
        ("milktooth", "Sut tish"),
        ("implant", "Implant"),
        ("tooth-crownprep", "Koronaga tayyorlangan tish"),
        ("tooth-under-gum", "Milk ostidagi tish"),
        ("no-tooth-after-extraction", "Olib tashlangan tish"),
    ]

    FILLING_MATERIAL_CHOICES = [
        ("none", "To'ldirish yo'q"),
        ("amalgam", "Amalgam"),
        ("composite", "Kompozit"),
        ("gic", "GIC"),
        ("temporary", "Vaqtinchalik"),
    ]

    ENDO_CHOICES = [
        ("none", "Sog'lom ildiz"),
        ("endo-medical-filling", "Dori bilan ildiz davolash"),
        ("endo-filling", "Ildiz to'ldirilgan"),
        ("endo-filling-incomplete", "To'liq bo'lmagan ildiz to'ldirish"),
        ("endo-glass-pin", "Shisha pin"),
        ("endo-metal-pin", "Metall pin"),
    ]

    MOBILITY_CHOICES = [
        ("none", "Hech biri"),
        ("m1", "1-daraja"),
        ("m2", "2-daraja"),
        ("m3", "3-daraja"),
    ]

    customer = models.ForeignKey(
        Customer,
        on_delete=models.CASCADE,
        related_name="tooth_states",
        verbose_name="Mijoz",
    )
    tooth_no = models.PositiveSmallIntegerField("Tish raqami")

    tooth_selection = models.CharField(
        "Baza",
        max_length=40,
        choices=TOOTH_SELECTION_CHOICES,
        default="tooth-base",
    )
    filling_material = models.CharField(
        "Plomba turi",
        max_length=30,
        choices=FILLING_MATERIAL_CHOICES,
        default="none",
    )
    endo = models.CharField(
        "Ildiz holati",
        max_length=40,
        choices=ENDO_CHOICES,
        default="none",
    )
    mobility = models.CharField(
        "Harakatchanlik",
        max_length=10,
        choices=MOBILITY_CHOICES,
        default="none",
    )

    caries_mesial = models.BooleanField(default=False)
    caries_distal = models.BooleanField(default=False)
    caries_buccal = models.BooleanField(default=False)
    caries_lingual = models.BooleanField(default=False)
    caries_occlusal = models.BooleanField(default=False)
    caries_subcrown = models.BooleanField(default=False)

    fissure_sealing = models.BooleanField(default=False)
    filling_buccal = models.BooleanField(default=False)
    filling_lingual = models.BooleanField(default=False)
    filling_mesial = models.BooleanField(default=False)
    filling_distal = models.BooleanField(default=False)
    filling_occlusal = models.BooleanField(default=False)
    pulp_inflam = models.BooleanField(default=False)
    endo_resection = models.BooleanField(default=False)
    parapulpal_pin = models.BooleanField(default=False)
    periodontal_inflammation = models.BooleanField(default=False)
    periapical_inflammation = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["tooth_no"]
        unique_together = ("customer", "tooth_no")
        verbose_name = "Tish holati"
        verbose_name_plural = "Tish holatlari"

    def __str__(self):
        return f"{self.customer.full_name} - {self.tooth_no}"


class OdontogramToothHistory(models.Model):
    EVENT_TYPE_CHOICES = [
        ("update", "Yangilanish"),
        ("treatment", "Davolash"),
        ("control", "Nazorat"),
        ("complaint", "Shikoyat"),
        ("note", "Izoh"),
    ]
    SOURCE_CHOICES = [
        ("auto", "Avtomatik"),
        ("manual", "Qo'lda"),
    ]

    customer = models.ForeignKey(
        Customer,
        on_delete=models.CASCADE,
        related_name="tooth_history",
        verbose_name="Mijoz",
    )
    tooth_no = models.PositiveSmallIntegerField("Tish raqami")
    source = models.CharField(
        "Manba",
        max_length=12,
        choices=SOURCE_CHOICES,
        default="auto",
    )
    event_type = models.CharField(
        "Yozuv turi",
        max_length=20,
        choices=EVENT_TYPE_CHOICES,
        default="update",
    )
    summary = models.CharField("Sarlavha", max_length=255)
    details = models.TextField("Tafsilot", blank=True)
    payment_amount = models.DecimalField("To'lov summasi", max_digits=12, decimal_places=2, null=True, blank=True)
    payment_description = models.TextField("To'lov izohi", blank=True)
    snapshot = models.JSONField("Holat snapshoti", default=dict, blank=True)
    occurred_at = models.DateTimeField("Holat vaqti", default=timezone.now)
    image_1 = models.FileField("1-rasm", upload_to=tooth_history_upload_to, blank=True)
    image_2 = models.FileField("2-rasm", upload_to=tooth_history_upload_to, blank=True)
    image_3 = models.FileField("3-rasm", upload_to=tooth_history_upload_to, blank=True)
    created_at = models.DateTimeField("Yaratilgan vaqt", auto_now_add=True)

    class Meta:
        ordering = ["-created_at", "-id"]
        verbose_name = "Tish tarixi"
        verbose_name_plural = "Tish tarixi"

    def __str__(self):
        return f"{self.customer.full_name} - {self.tooth_no} - {self.summary}"


class Appointment(models.Model):
    STATUS_PLANNED = "planned"
    STATUS_DONE = "done"
    STATUS_CANCELLED = "cancelled"
    STATUS_CHOICES = [
        (STATUS_PLANNED, "Rejalashtirilgan"),
        (STATUS_DONE, "Bajarilgan"),
        (STATUS_CANCELLED, "Bekor qilingan"),
    ]

    clinic = models.ForeignKey(Clinic, on_delete=models.CASCADE, related_name="appointments")
    customer = models.ForeignKey(
        Customer,
        on_delete=models.SET_NULL,
        related_name="appointments",
        null=True,
        blank=True,
    )
    assigned_to = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        related_name="assigned_appointments",
        null=True,
        blank=True,
    )
    created_by = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        related_name="created_appointments",
        null=True,
        blank=True,
    )
    title = models.CharField("Sarlavha", max_length=180)
    notes = models.TextField("Izoh", blank=True)
    starts_at = models.DateTimeField("Boshlanish vaqti")
    ends_at = models.DateTimeField("Tugash vaqti")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=STATUS_PLANNED)
    color = models.CharField(max_length=20, default="#0e7490", blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["starts_at", "-created_at"]
        verbose_name = "Qabul jadvali"
        verbose_name_plural = "Qabul jadvallari"

    def __str__(self):
        return f"{self.clinic.name} - {self.title}"
