from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from rest_framework import status

from .serializers import UserSerializer, RegisterSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer

class UserView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# class CustomTokenObtainPairView(TokenObtainPairView):
#      def post(self, request, *args, **kwargs):
#          response = super().post(request, *args, **kwargs)
#          if response.status_code == 200:
#              response.data['user'] = UserSerializer(self.user).data
#          return response


class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == 200:
            # The user isn't set as an attribute on self
            # We need to get it from the request/credentials
            user = User.objects.get(username=request.data['username'])
            response.data['user'] = UserSerializer(user).data
        return response