from django.db import models
from ckeditor.fields import RichTextField
# Create your models here.
# Hero slider dynamic
class HeroSlider (models.Model):
    title = models.CharField(max_length=500)
    subTitle = models.CharField(max_length=900)
    heroImage = models.ImageField(upload_to='Hero')
    def __str__(self):
        return self.title
class Award (models.Model):
    title = models.CharField(max_length=200)
    heroImage = models.ImageField(upload_to='Award')
    def __str__(self):
        return self.title
    
class SpecialEvent(models.Model):
    title = models.CharField(max_length=500)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='Event')
    startDate = models.DateField()
    endDate = models.DateField()
    def __str__(self):
        return self.title
class WhyChooseUs(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='ChoiceUS')
    details_information = RichTextField(null=True, blank=True)
    def __str__(self):
        return self.title
class Service(models.Model):
    href = models.CharField(max_length=500)
    name = models.CharField(max_length=500)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='Service')
    def __str__(self):
        return self.name
class ClientCouncil(models.Model):
    name = models.CharField(max_length=150 )
    phone = models.CharField(max_length=20)
    message = models.TextField()
    def __str__(self):
        return self.name
    
class ContactForm(models.Model):
    name = models.CharField(max_length=300, null=False,blank=False)
    email = models.EmailField(null=False,blank=False)
    subject = models.CharField(max_length=500,null=False,blank=False)
    message = models.TextField(null=False,blank=False)
    def __str__(self):
        return self.name
    
class JobsPost(models.Model):
    title = models.CharField(max_length=500)
    description = models.TextField()
    image = models.ImageField(upload_to='Jobs')
    category = models.CharField(max_length=300)
    vacancy = models.IntegerField()
    requirement = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    endDate = models.DateTimeField(auto_now_add=False)
    def __str__(self):
        return self.title
    
class AppliedCandidates(models.Model):
    jobsPostTitle = models.CharField(max_length=500, null=True)
    name = models.CharField(max_length=300, null=False,blank=False)
    email = models.EmailField(null=False,blank=False)
    phone = models.CharField(max_length=20)
    postName = models.CharField(max_length=600)
    cv = models.FileField(upload_to='CV')
    IdentityCard = models.FileField(upload_to='IdCard')
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.name