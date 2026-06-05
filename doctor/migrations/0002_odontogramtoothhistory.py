from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("doctor", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="OdontogramToothHistory",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("tooth_no", models.PositiveSmallIntegerField(verbose_name="Tish raqami")),
                ("source", models.CharField(choices=[("auto", "Avtomatik"), ("manual", "Qo'lda")], default="auto", max_length=12, verbose_name="Manba")),
                ("summary", models.CharField(max_length=255, verbose_name="Sarlavha")),
                ("details", models.TextField(blank=True, verbose_name="Tafsilot")),
                ("snapshot", models.JSONField(blank=True, default=dict, verbose_name="Holat snapshoti")),
                ("created_at", models.DateTimeField(auto_now_add=True, verbose_name="Yaratilgan vaqt")),
                ("customer", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="tooth_history", to="doctor.customer", verbose_name="Mijoz")),
            ],
            options={
                "verbose_name": "Tish tarixi",
                "verbose_name_plural": "Tish tarixi",
                "ordering": ["-created_at", "-id"],
            },
        ),
    ]
