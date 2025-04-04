# backend/users/serializers.py - Update your RegisterSerializer

from rest_framework import serializers
from django.contrib.auth.models import User
import re

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def validate_password(self, value):
        """
        Validate password meets strength requirements:
        - At least 8 characters
        - Contains both letters and numbers
        """
        if len(value) < 8:
            raise serializers.ValidationError("Password must be at least 8 characters long.")
        
        # Check if password contains both letters and numbers
        if not (re.search(r'[A-Za-z]', value) and re.search(r'[0-9]', value)):
            raise serializers.ValidationError("Password must contain both letters and numbers.")
            
        return value

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user