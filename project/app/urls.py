from django.urls import path
from . import views
from .views import *


urlpatterns = [
    path('', views.index , name="index"),
    path("api/v1/about/",AboutListView.as_view() ,name="about"),
    path('api/v1/blogs/', BlogListView.as_view(), name='blogs'),
    path('blogs/detail/<int:id>',BlogRerieveUpdateDeleteView.as_view(), name='blog-details'),
    path('projects', ProjectListView.as_view(), name='projects'),
    path("projects/detaol/<int:id>",ProjectRerieveUpdateDeleteView.as_view(),name="project_details"),
    path('api/v1/banner/', BannerListView.as_view(), name='banners'),
]
