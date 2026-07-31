from django.urls import path
from .views import HeroSlider,SpecialEvent,Service,Award,ClientCouncil,WhyChooseUsView,WhyChooseUsDetailsView,ContactForm,JobsPostView,JobsPostDetailsView,AppliedCandidates
urlpatterns =[
    path('hero-slider/',HeroSlider.as_view()),
    path('award/',Award.as_view()),
    path('special-event/',SpecialEvent.as_view()),
    path('why-choose-us/',WhyChooseUsView.as_view()),
    path('why-choose-us/<int:pk>',WhyChooseUsDetailsView.as_view()),
    path('service/',Service.as_view()),
    path('client-council/',ClientCouncil.as_view()),
    path('contact-form/',ContactForm.as_view()),
    path('jobs/',JobsPostView.as_view()),
    path('jobs/<int:pk>',JobsPostDetailsView.as_view()),
    path('applied-candidates/',AppliedCandidates.as_view()),
]