from django.db import models
from autoslug import AutoSlugField

# Create your models here.
class About(models.Model):
        name  = models.CharField(max_length= 100)
        email = models.EmailField()
        phone= models.PositiveIntegerField()
        image  = models.ImageField(upload_to='aboutimage/')

        class Meta:
                ordering =['-id']
        
        def __str__(self):
                return self.name +self.email + str(self.phone)
    


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

