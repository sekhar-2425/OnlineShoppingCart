from django.contrib import admin
from .models import Category, Order, Product, CustomUser

# Register your models here.
admin.site.register(Category)
admin.site.register(Order)
admin.site.register(Product)
admin.site.register(CustomUser)