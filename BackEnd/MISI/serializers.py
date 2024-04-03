from rest_framework import serializers
from .models import HeroSlider,SpecialEvent,Service,Award,ClientCouncil,WhyChooseUs,ContactForm,JobsPost,AppliedCandidates

class HeroSlideSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSlider 
        fields = '__all__'  
class AwardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Award 
        fields = '__all__'  
        
class SpecialEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpecialEvent
        fields = '__all__'
class WhyChooseUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhyChooseUs
        fields = '__all__'
class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
class ClientCouncilSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientCouncil
        fields = '__all__'
class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = '__all__'
class JobsPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobsPost
        fields = '__all__'
class AppliedCandidatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppliedCandidates
        fields = '__all__'
