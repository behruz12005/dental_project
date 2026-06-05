from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth.models import User

from .models import Appointment, Clinic, Customer


class LoginForm(AuthenticationForm):
    username = forms.CharField(
        label="Login",
        widget=forms.TextInput(attrs={"class": "form-input", "placeholder": "Login"}),
    )
    password = forms.CharField(
        label="Parol",
        widget=forms.PasswordInput(attrs={"class": "form-input", "placeholder": "Parol"}),
    )


class ClinicSetupForm(forms.ModelForm):
    class Meta:
        model = Clinic
        fields = ["name", "phone", "address"]
        widgets = {
            "name": forms.TextInput(attrs={"class": "form-input", "placeholder": "Klinika nomi"}),
            "phone": forms.TextInput(attrs={"class": "form-input", "placeholder": "+998 90 123 45 67"}),
            "address": forms.Textarea(attrs={"class": "form-textarea", "rows": 3, "placeholder": "Klinika manzili"}),
        }


class StaffUserCreateForm(UserCreationForm):
    first_name = forms.CharField(
        label="Ism",
        widget=forms.TextInput(attrs={"class": "form-input", "placeholder": "Ism"}),
    )
    last_name = forms.CharField(
        label="Familiya",
        widget=forms.TextInput(attrs={"class": "form-input", "placeholder": "Familiya"}),
    )
    username = forms.CharField(
        label="Login",
        widget=forms.TextInput(attrs={"class": "form-input", "placeholder": "Login"}),
    )
    email = forms.EmailField(
        label="Email",
        required=False,
        widget=forms.EmailInput(attrs={"class": "form-input", "placeholder": "email@example.com"}),
    )
    password1 = forms.CharField(
        label="Parol",
        widget=forms.PasswordInput(attrs={"class": "form-input", "placeholder": "Parol"}),
    )
    password2 = forms.CharField(
        label="Parol tasdiqlash",
        widget=forms.PasswordInput(attrs={"class": "form-input", "placeholder": "Parolni qayta kiriting"}),
    )

    class Meta:
        model = User
        fields = ["first_name", "last_name", "username", "email", "password1", "password2"]


class CustomerForm(forms.ModelForm):
    class Meta:
        model = Customer
        fields = [
            "full_name",
            "profile_image",
            "phone",
            "birth_date",
            "arrived_at",
            "address",
            "latitude",
            "longitude",
            "complaint",
            "has_allergy",
            "allergy_details",
            "has_chronic_disease",
            "chronic_disease_details",
            "referred_by",
            "note",
        ]
        widgets = {
            "full_name": forms.TextInput(attrs={"class": "form-input", "placeholder": "Ism familiyasi"}),
            "profile_image": forms.ClearableFileInput(attrs={"class": "form-input", "accept": "image/*"}),
            "phone": forms.TextInput(attrs={"class": "form-input", "placeholder": "+998 90 123 45 67"}),
            "birth_date": forms.DateInput(attrs={"class": "form-input", "type": "date"}),
            "arrived_at": forms.DateTimeInput(attrs={"class": "form-input", "type": "datetime-local"}),
            "address": forms.Textarea(attrs={"class": "form-textarea", "rows": 3, "placeholder": "Manzilni kiriting"}),
            "latitude": forms.HiddenInput(),
            "longitude": forms.HiddenInput(),
            "complaint": forms.Textarea(attrs={"class": "form-textarea", "rows": 4, "placeholder": "Bemorning shikoyati"}),
            "allergy_details": forms.Textarea(attrs={"class": "form-textarea", "rows": 3, "placeholder": "Allergiya tafsiloti"}),
            "chronic_disease_details": forms.Textarea(attrs={"class": "form-textarea", "rows": 3, "placeholder": "Surunkali kasallik tafsiloti"}),
            "referred_by": forms.Select(attrs={"class": "form-input"}),
            "note": forms.Textarea(attrs={"class": "form-textarea", "rows": 3, "placeholder": "Qo'shimcha izoh"}),
            "has_allergy": forms.CheckboxInput(attrs={"class": "form-checkbox"}),
            "has_chronic_disease": forms.CheckboxInput(attrs={"class": "form-checkbox"}),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        arrived_at = self.initial.get("arrived_at") or getattr(self.instance, "arrived_at", None)
        if arrived_at:
            self.initial["arrived_at"] = arrived_at.strftime("%Y-%m-%dT%H:%M")


class AppointmentForm(forms.ModelForm):
    DURATION_CHOICES = [
        (30, "30 minut"),
        (60, "1 soat"),
        (90, "1.5 soat"),
        (120, "2 soat"),
    ]

    duration_minutes = forms.TypedChoiceField(
        label="Davomiyligi",
        choices=DURATION_CHOICES,
        coerce=int,
        initial=30,
        widget=forms.Select(attrs={"class": "form-input"}),
    )

    class Meta:
        model = Appointment
        fields = ["customer", "assigned_to", "notes", "starts_at", "status", "color"]
        widgets = {
            "customer": forms.HiddenInput(),
            "assigned_to": forms.Select(attrs={"class": "form-input"}),
            "notes": forms.TextInput(attrs={"class": "form-input", "placeholder": "Qabul haqida qisqa izoh"}),
            "starts_at": forms.DateTimeInput(attrs={"class": "form-input", "type": "datetime-local"}),
            "status": forms.Select(attrs={"class": "form-input"}),
            "color": forms.TextInput(attrs={"class": "form-input", "type": "color"}),
        }

    def __init__(self, *args, clinic=None, staff_queryset=None, customer_queryset=None, user=None, membership=None, **kwargs):
        super().__init__(*args, **kwargs)
        if clinic is not None:
            self.fields["customer"].queryset = customer_queryset if customer_queryset is not None else clinic.customers.order_by("full_name")
        if staff_queryset is not None:
            self.fields["assigned_to"].queryset = staff_queryset
        if membership and not membership.is_owner and user is not None:
            self.fields["assigned_to"].initial = user.pk
            self.fields["assigned_to"].widget = forms.HiddenInput()
        starts_at = self.initial.get("starts_at") or getattr(self.instance, "starts_at", None)
        if starts_at:
            self.initial["starts_at"] = starts_at.strftime("%Y-%m-%dT%H:%M")
        if getattr(self.instance, "pk", None) and self.instance.starts_at and self.instance.ends_at:
            duration = int((self.instance.ends_at - self.instance.starts_at).total_seconds() // 60)
            self.initial["duration_minutes"] = duration if duration in dict(self.DURATION_CHOICES) else 60

    def clean(self):
        cleaned_data = super().clean()
        starts_at = cleaned_data.get("starts_at")
        assigned_to = cleaned_data.get("assigned_to")
        customer = cleaned_data.get("customer")
        duration_minutes = cleaned_data.get("duration_minutes")
        if starts_at is None:
            self.add_error("starts_at", "Qabul vaqti tanlanishi kerak.")
        if customer is None:
            self.add_error("customer", "Bemor tanlanishi kerak.")
        if assigned_to is None:
            self.add_error("assigned_to", "Xodim tanlanishi kerak.")
        if duration_minutes is None:
            self.add_error("duration_minutes", "Davomiyligini tanlang.")
        return cleaned_data
