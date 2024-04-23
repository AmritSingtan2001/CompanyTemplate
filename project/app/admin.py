from django.contrib import admin
from . models import About ,Blog ,Project , Banner,TeamMember,ContactUs

class AboutAdmin(admin.ModelAdmin):
    model = About
    list_display =['id','title']
admin.site.register(About,AboutAdmin)

class BlogAdmin(admin.ModelAdmin):
    model = Blog
    list_display =['id','title','createdAt']
admin.site.register(Blog,BlogAdmin)


class ProjectAdmin(admin.ModelAdmin):
    model = Project
    list_display =['id','title','createdAt']
admin.site.register(Project,BlogAdmin)

class BannerAdmin(admin.ModelAdmin):
    model = Banner
    list_display = ['id','title','createdAt']
admin.site.register(Banner,BannerAdmin)


admin.site.register(TeamMember)
admin.site.register(ContactUs)