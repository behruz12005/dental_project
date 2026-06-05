from django.db import models


class ContactRequest(models.Model):
    STATUS_CHOICES = [
        ("new", "Yangi so‘rov"),
        ("called", "Qo‘ng‘iroq qilindi"),
        ("not_answered", "Javob bermadi"),
        ("booked", "Qabulga yozildi"),
        ("came", "Keldi"),
        ("cancelled", "Bekor qilindi"),
    ]

    name = models.CharField("Ism", max_length=150)
    phone = models.CharField("Telefon raqam", max_length=30)
    message = models.TextField("Xabar", blank=True, null=True)

    is_checked = models.BooleanField("Tekshirildimi?", default=False)

    status = models.CharField(
        "Holati",
        max_length=30,
        choices=STATUS_CHOICES,
        default="new"
    )

    operator_note = models.TextField("Operator izohi", blank=True, null=True)

    created_at = models.DateTimeField("Yuborilgan vaqt", auto_now_add=True)
    updated_at = models.DateTimeField("O‘zgartirilgan vaqt", auto_now=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Bog‘lanish so‘rovi"
        verbose_name_plural = "Bog‘lanish so‘rovlari"

    def __str__(self):
        return f"{self.name} - {self.phone}"