# Generated by Django 4.0.4 on 2022-05-25 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cityorbeach',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='continent',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='country',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]