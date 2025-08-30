from django.urls import path
from .views import LCMView

urlpatterns = [
    path('lcm/', LCMView.as_view(), name='lcm'),
]
