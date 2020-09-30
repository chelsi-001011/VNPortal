from django.urls import path
from .import views

urlpatterns = [
	path('vn/',views.index,name='index'),
]