from itertools import product
from django.db import models

# Create your models here.

class DateTimeWithoutTZField(models.DateTimeField):
    def db_type(self, connection):
        return 'timestamp'

class Tags(models.Model):
    class Meta:
        verbose_name = '分類'
        verbose_name_plural = '分類'
    chinese_name = models.CharField('中文名稱', max_length=50)
    english_name = models.CharField('英文名稱', max_length=50)

class Product(models.Model):
    class Meta:
        verbose_name = '產品'
        verbose_name_plural = '產品'
    tags = models.ForeignKey(Tags, on_delete=models.CASCADE,default=None, null=True, blank=True)
    name = models.CharField('名稱', max_length=50)
    _type = models.CharField('型號', max_length=50)
    description = models.CharField('描述', max_length=200,default=None, null=True, blank=True)
    image = models.ImageField(upload_to='images',default=None, null=True, blank=True)  
    origin = models.CharField('產地', max_length=50,default=None, null=True, blank=True)

class Video(models.Model):
    class Meta:
        verbose_name = '影片'
        verbose_name_plural = '影片'
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    url = models.TextField('影片連結')

class Picture(models.Model):
    class Meta:
        verbose_name = '圖片'
        verbose_name_plural = '圖片'
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    url = models.TextField('圖片連結')


  