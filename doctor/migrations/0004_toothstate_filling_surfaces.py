from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("doctor", "0003_history_media_fields"),
    ]

    operations = [
        migrations.AddField(
            model_name="odontogramtoothstate",
            name="filling_buccal",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="odontogramtoothstate",
            name="filling_distal",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="odontogramtoothstate",
            name="filling_lingual",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="odontogramtoothstate",
            name="filling_mesial",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="odontogramtoothstate",
            name="filling_occlusal",
            field=models.BooleanField(default=False),
        ),
    ]
