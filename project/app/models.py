from django.db import models
from autoslug import AutoSlugField

# Create your models here.
class About(models.Model):
        image = models.ImageField(upload_to='aboutimage/')
        title = models.CharField(max_length=150)
        descriptions = models.TextField()

        class Meta:
                ordering =['-id']
        
        def __str__(self):
                return self.title
    


class Blog(models.Model):
        title=models.CharField(max_length=100)
        description = models.TextField()
        image = models.ImageField(upload_to="blogimage/")
        createdAt = models.DateField(auto_now = True)
        blog_slug=AutoSlugField(populate_from='title')

        class Meta:
                ordering =['-id']
        
        def __str__(self):
                return self.title +self.description


class Project(models.Model):
        title=models.CharField(max_length=100)
        description = models.TextField()
        image = models.ImageField(upload_to ="projectsimage/")
        createdAt = models.DateField(auto_now = True)
        blog_slug=AutoSlugField(populate_from='title')

        class Meta:
                ordering =['-id']
        
        def __str__(self):
                return self.title +self.description


class Banner(models.Model):
        title =models.CharField(max_length=100)
        description = models.TextField()
        image = models.ImageField(upload_to="bannerimage/")
        createdAt = models.DateField(auto_now = True)

        class Meta:
                ordering =['-id']

        def __str__(self):
                return self.title +self.description
        

class TeamMember(models.Model):
        name= models.CharField(max_length=150)
        image = models.ImageField(upload_to='teamimage/')
        position = models.CharField(max_length=150)


        def __str__(self):
                return self.name



class ContactUs(models.Model):
        name =models.CharField(max_length=150)
        email = models.EmailField()
        phone = models.CharField(max_length=150)
        message = models.TextField()

        def __str__(self):
                return self.name