from django.db import models

# Create your models here.
class Food(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=4, decimal_places=2)
    image = models.URLField()