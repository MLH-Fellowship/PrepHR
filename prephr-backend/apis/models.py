from django.db import models
from djongo import models as mod
from django import forms
from rest_framework import serializers
from django.utils import timezone

class Performance(models.Model):

    Concentration = models.IntegerField()
    Clarity = models.IntegerField()
    Expression = models.IntegerField()
    Posture = models.IntegerField()
    Focus = models.IntegerField()
    Understanding = models.IntegerField()
    EyeContact = models.IntegerField()

    class Meta:
        abstract = True

class PerformanceForm(forms.ModelForm):

    class Meta:
        model = Performance
        fields = (
            'Concentration', 'Clarity', 'Expression', 'Posture', 'Focus', 'Understanding', 'EyeContact'
        )

class Question(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    questionGrade = models.CharField(max_length=20)
    keywords = models.TextField()

class User(models.Model):
    email = models.EmailField(max_length=70, blank=False, unique=True)
    name = models.CharField(max_length=200, blank=False)
    pastPerformance = mod.ArrayField(
        model_container = Performance,
        model_form_class = PerformanceForm
    )

    def addPerformance(self, pbody):
        l = []
        l.extend(self.pastPerformance)
        l.extend(pbody)
        self.pastPerformance = l

class VideoFile(models.Model):
    email = models.EmailField(max_length=70, blank=False)
    file = models.FileField(blank=False, null=False)
    timestamp = models.DateTimeField(default=timezone.now)

