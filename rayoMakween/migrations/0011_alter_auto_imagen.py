# Generated by Django 3.2.3 on 2021-06-17 00:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rayoMakween', '0010_auto_usuario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='auto',
            name='imagen',
            field=models.ImageField(default='fotos/no_imagen.jpg', upload_to='fotos'),
        ),
    ]
