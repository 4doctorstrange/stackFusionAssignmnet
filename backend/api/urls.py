from django.contrib import admin
from django.urls import path,include
from .views import UserView
urlpatterns = [
    path("api/users", UserView.as_view(),name="users"),
]
