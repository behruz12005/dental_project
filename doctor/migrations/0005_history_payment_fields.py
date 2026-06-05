from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("doctor", "0004_toothstate_filling_surfaces"),
    ]

    operations = [
        migrations.AddField(
            model_name="odontogramtoothhistory",
            name="payment_amount",
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=12, null=True, verbose_name="To'lov summasi"),
        ),
        migrations.AddField(
            model_name="odontogramtoothhistory",
            name="payment_description",
            field=models.TextField(blank=True, verbose_name="To'lov izohi"),
        ),
    ]
