from rest_framework import serializers
from .models import  Tags,Product,Video,Picture


class TagsSeializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = (
            'id',
            'chinese_name',
            'english_name',
        )
class ProductSeializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            'tags',
            'name',
            '_type',
            'description',
            'image',
            'origin',
        )
class VideoSeializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = (
            'id',
            'product',
            'url',
        )
class PictureSeializer(serializers.ModelSerializer):
    class Meta:
        model = Picture
        fields = (
            'id',
            'product',
            'url',
        )