from django.contrib import admin
from .models import HeroSlider,SpecialEvent,Service,Award,ClientCouncil,WhyChooseUs,ContactForm,JobsPost,AppliedCandidates
# Register your models here.
admin.site.register(HeroSlider)
admin.site.register(Award)
admin.site.register(SpecialEvent)
admin.site.register(WhyChooseUs)
admin.site.register(Service)
admin.site.register(JobsPost)
@admin.register(ClientCouncil)
class CouncilAdmin(admin.ModelAdmin):
    list_display = ['id','name','phone','message']
    
@admin.register(ContactForm)
class ContactMessageList(admin.ModelAdmin):
    list_display =['name','email','subject','message']
@admin.register(AppliedCandidates)
class AppliedCandidatesList(admin.ModelAdmin):
    list_display =['jobsPostTitle','name','email','phone','postName','cv','IdentityCard']