from rest_framework import serializers
from .models import User, VideoFile, Question

class UserSerializer(serializers.ModelSerializer):
    
    pastPerformance = serializers.ListField()

    class Meta:
        model = User
        fields = ('email','name','pastPerformance')

class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        fields = ('title', 'body' ,'questionGrade' ,'keywords')

class VideoFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoFile
        fields = ('file','timestamp')