from django.db import migrations, models
import doctor.models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("doctor", "0002_odontogramtoothhistory"),
    ]

    operations = [
        migrations.AddField(
            model_name="odontogramtoothhistory",
            name="event_type",
            field=models.CharField(choices=[("update", "Yangilanish"), ("treatment", "Davolash"), ("control", "Nazorat"), ("complaint", "Shikoyat"), ("note", "Izoh")], default="update", max_length=20, verbose_name="Yozuv turi"),
        ),
        migrations.AddField(
            model_name="odontogramtoothhistory",
            name="image_1",
            field=models.FileField(blank=True, upload_to=doctor.models.tooth_history_upload_to, verbose_name="1-rasm"),
        ),
        migrations.AddField(
            model_name="odontogramtoothhistory",
            name="image_2",
            field=models.FileField(blank=True, upload_to=doctor.models.tooth_history_upload_to, verbose_name="2-rasm"),
        ),
        migrations.AddField(
            model_name="odontogramtoothhistory",
            name="image_3",
            field=models.FileField(blank=True, upload_to=doctor.models.tooth_history_upload_to, verbose_name="3-rasm"),
        ),
        migrations.AddField(
            model_name="odontogramtoothhistory",
            name="occurred_at",
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name="Holat vaqti"),
        ),
    ]
