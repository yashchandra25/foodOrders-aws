from django.db import models
from django.db.models import JSONField

# Create your models here.
class Order(models.Model):
    username = models.CharField(max_length=150)
    order_message = models.TextField()
    orders = JSONField()

    def _str__(self):
        return self.username