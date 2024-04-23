from .models import *
from rest_framework import serializers


class AboutSerializers(serializers.ModelSerializer):
    class Meta:
        model = About
        fields ='__all__'

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


class TeamMemberSerializers(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = '__all__'


class ContactUsSerializers(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields ='__all__'