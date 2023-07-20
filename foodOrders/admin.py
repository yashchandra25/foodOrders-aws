from django.contrib import admin
from .models import Order

# Register your models here.
class OrderAdmin(admin.ModelAdmin):
    list_display = ('username', 'order_message', 'orders')

admin.site.register(Order, OrderAdmin)