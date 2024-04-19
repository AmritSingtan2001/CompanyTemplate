from django.shortcuts import render,HttpResponse
from .models import *
from .serializers import *
from rest_framework import generics

# Create your views here.
def index(request):
    return HttpResponse("Hello")

def about(request):
    return HttpResponse("About")


class BlogListView(generics.ListCreateAPIView):
    queryset  = Blog.objects.all()  # Select * from blog 
    serializer_class = BlogSerializers


class BlogRerieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializers
    lookup_field ='id'

class ProjectListView(generics.ListCreateAPIView):
    queryset =Project.objects.all()
    serializer_class = ProjectSerializers

class ProjectRerieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializers
    lookup_field ='id'

class BannerListView(generics.ListCreateAPIView):
    queryset = Banner.objects.all()
    serializer_class = BannerSerializers