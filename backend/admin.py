from django.contrib import admin
from .models import Tags,Product,Video,Picture
# Register your models here.

class TagAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'chinese_name',
        'english_name',
    )
    search_field = (
         'id',
        'chinese_name',
        'english_name',
    )

class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'tags',
        'name',
        '_type',
        'description',
        'origin',
    )
    search_field = (
        'tags',
        'name',
        '_type',
        'description',
        'origin',
    )

class VideoAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'product',
        'url',
    )
    search_field = (
        'id',
        'product',
        'url',
    )

class PictureAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'product',
        'url',
    )
    search_field = (
        'id',
        'product',
        'url',
    )

admin.site.register(Tags, TagAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Video, VideoAdmin)
admin.site.register(Picture, PictureAdmin)