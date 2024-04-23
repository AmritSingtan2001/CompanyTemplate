from django.urls import path
from . import views
from .views import *


urlpatterns = [
    path('', views.index , name="index"),
    path("api/v1/about/",AboutListView.as_view() ,name="about"),
    path('api/v1/blogs/', BlogListView.as_view(), name='blogs'),
    path('api/v1/blogs/detail/<int:id>',BlogRerieveUpdateDeleteView.as_view(), name='blog-details'),
    path('api/v1/projects', ProjectListView.as_view(), name='projects'),
    path("api/v1/projects/detaol/<int:id>",ProjectRerieveUpdateDeleteView.as_view(),name="project_details"),
    path('api/v1/banner/', BannerListView.as_view(), name='banners'),
    path('api/v1/team/members',TeamMemberListView.as_view(), name='team_members'),
    path('api/v1/contact/us', ContacUsPostView.as_view(), name='contact_us')
]
