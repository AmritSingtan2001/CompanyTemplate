from .models import *
from rest_framework import serializers


class BlogSerializers(serializers.ModelSerializer):

    class Meta:
        model=Blog
        fields='__all__'



class ProjectSerializers(serializers.ModelSerializer):

    class Meta:
        model=Project
        fields='__all__'
    
class BannerSerializers(serializers.ModelSerializer):

    class Meta:
        model=Banner
        fields='__all__'