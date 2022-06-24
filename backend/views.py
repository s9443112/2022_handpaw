from django.shortcuts import render
from rest_framework import viewsets, status

from .serializers import TagsSeializer,ProductSeializer,VideoSeializer,PictureSeializer
from rest_framework.decorators import action
from rest_framework.response import Response
# from rest_framework.parsers import FileUploadParser
from rest_framework.parsers import (
    FormParser,
    MultiPartParser
)
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from .models import  Tags,Product,Video,Picture



class TagsView(viewsets.ModelViewSet):
    serializer_class = TagsSeializer
    queryset = Tags.objects.all()

class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSeializer
    queryset = Product.objects.all()

class VideoView(viewsets.ModelViewSet):
    serializer_class = VideoSeializer
    queryset = Video.objects.all()

class PictureView(viewsets.ModelViewSet):
    serializer_class = PictureSeializer
    queryset = Picture.objects.all()



# Create your views here.
