from django.db import models
from django.core import serializers

# Create your models here.
class Travel(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    continent = models.CharField(max_length=100)
    destinationimage = models.CharField(null=True, max_length=2500)

    def __str__(self):
        return self.name


