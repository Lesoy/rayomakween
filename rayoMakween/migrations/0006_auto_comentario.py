# Generated by Django 3.2.3 on 2021-06-15 01:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rayoMakween', '0005_auto_publicar'),
    ]

    operations = [
        migrations.AddField(
            model_name='auto',
            name='comentario',
            field=models.TextField(default='--', null=True),
        ),
    ]
