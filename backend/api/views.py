from django.shortcuts import render
from .models import UserModel
from .serializers import UserSerializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 
# Create your views here.

class UserView(APIView):
    serializer_class= UserSerializers

    def get(self,request):
        data = UserModel.objects.all()
        serializer = self.serializer_class(data,many=True)
        return Response(serializer.data, status= status.HTTP_200_OK)


    def post(self,request):
        serializer= self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            serialized_data = serializer.data
            return Response(serialized_data, status = status.HTTP_201_CREATED)
        return Response(serializer.error_messages, status = status.HTTP_400_BAD_REQUEST)
