# Generated by Django 4.0.4 on 2022-05-25 08:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Travel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=100)),
                ('country', models.CharField(max_length=100)),
                ('continent', models.CharField(max_length=100)),
                ('destination_image', models.CharField(max_length=2500, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='VisitedLocation',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('location_name', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='travel.travel')),
                ('username', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
