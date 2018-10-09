from django.conf.urls import url, include

from django.contrib import admin

# from django.conf.urls import path

from app import views

urlpatterns = [

    url(r'^admin/',admin.site.urls),

    url(r'^images/',views.IdealWeight),

    url(r'^home/',views.HelloWorld)

]