# Generated by Django 3.2.3 on 2021-06-15 00:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rayoMakween', '0004_auto_imagen'),
    ]

    operations = [
        migrations.AddField(
            model_name='auto',
            name='publicar',
            field=models.BooleanField(default=False),
        ),
    ]