from django.shortcuts import render
from .models import HeroSlider,SpecialEvent,Service,Award,ClientCouncil,WhyChooseUs,ContactForm,JobsPost,AppliedCandidates
from .serializers import HeroSlideSerializer,SpecialEventSerializer,ServiceSerializer,AwardSerializer,ClientCouncilSerializer,WhyChooseUsSerializer,ContactFormSerializer,JobsPostSerializer,AppliedCandidatesSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin,CreateModelMixin,RetrieveModelMixin
# Create your views here.
class HeroSlider(GenericAPIView, ListModelMixin):
    queryset = HeroSlider.objects.all()
    serializer_class = HeroSlideSerializer
    
    def get(self, req ,*args, **kwargs ):
        return self.list(req ,*args, **kwargs)
class Award(GenericAPIView, ListModelMixin):
    queryset = Award.objects.all()
    serializer_class = AwardSerializer
    
    def get(self, req ,*args, **kwargs ):
        return self.list(req ,*args, **kwargs)
class SpecialEvent(GenericAPIView, ListModelMixin):
    queryset = SpecialEvent.objects.all()
    serializer_class = SpecialEventSerializer
    
    def get(self, req ,*args, **kwargs ):
        return self.list(req ,*args, **kwargs)
class WhyChooseUsView(GenericAPIView, ListModelMixin):
    queryset = WhyChooseUs.objects.all()
    serializer_class = WhyChooseUsSerializer
    
    def get(self, req ,*args, **kwargs ):
        return self.list(req ,*args, **kwargs)
    
class WhyChooseUsDetailsView(GenericAPIView, RetrieveModelMixin):
    queryset = WhyChooseUs.objects.all()
    serializer_class = WhyChooseUsSerializer
    def get(self, req ,*args, **kwargs ):
        return self.retrieve(req ,*args, **kwargs)
class Service(GenericAPIView, ListModelMixin):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    
    def get(self, req ,*args, **kwargs ):
        return self.list(req ,*args, **kwargs)
class ClientCouncil(GenericAPIView, CreateModelMixin):
    queryset = ClientCouncil.objects.all()
    serializer_class = ClientCouncilSerializer
    
    def post(self, req ,*args, **kwargs ):
        return self.create(req ,*args, **kwargs)
class ContactForm(GenericAPIView, CreateModelMixin):
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer
    
    def post(self, req ,*args, **kwargs ):
        return self.create(req ,*args, **kwargs)
    
class JobsPostView(GenericAPIView, ListModelMixin):
    queryset = JobsPost.objects.all()
    serializer_class = JobsPostSerializer

    def get(self, req ,*args, **kwargs ):
        return self.list(req ,*args, **kwargs)

class JobsPostDetailsView(GenericAPIView, RetrieveModelMixin):
    queryset = JobsPost.objects.all()
    serializer_class = JobsPostSerializer

    def get(self, req ,*args, **kwargs ):
        return self.retrieve(req ,*args, **kwargs)

class AppliedCandidates(GenericAPIView, CreateModelMixin):
    queryset = AppliedCandidates.objects.all()
    serializer_class = AppliedCandidatesSerializer
    
    def post(self, req ,*args, **kwargs ):
        return self.create(req ,*args, **kwargs)