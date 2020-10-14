from django.shortcuts import render
import os
import subprocess
import requests
import json

# Create your views here.
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
 
from .models import User, VideoFile, Question
from .serializers import UserSerializer, VideoFileSerializer, QuestionSerializer

import cv2
from .gaze_tracking import GazeTracking

@api_view(['POST'])
def addUser(request):
    try:
        user_data = JSONParser().parse(request)
        user_serializer = UserSerializer(data = user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse(user_serializer.data, status=status.HTTP_201_CREATED)      
        else:
            return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    except:
        return JsonResponse({"error":"The user already exists in DB"}, status.HTTP_406_NOT_ACCEPTABLE)

@api_view(['POST'])
def getUser(request):
    user_data = JSONParser().parse(request)
    email = user_data['email']
    try:
        user = User.objects.get(email=email)
        user_serializer = UserSerializer(user)
        return JsonResponse(user_serializer.data, safe=False)
    except User.DoesNotExist:
        return JsonResponse({"error":"The user does not exist in DB"}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def addUserPerformance(request):
    user_data = JSONParser().parse(request)
    email = user_data['email']
    performance = user_data['pastPerformance']
    try:
        user = User.objects.get(email=email)
        user.addPerformance(performance)
        user.save()
        user_serializer = UserSerializer(user)
        return JsonResponse(user_serializer.data, safe=False)
    except User.DoesNotExist:
        return JsonResponse({"error":"The user does not exist in DB"}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def getAllUserPerformances(request):
    user_data = JSONParser().parse(request)
    email = user_data['email']
    try:
        user = User.objects.get(email = email)
        user_serializer = UserSerializer(user)
        j = json.dumps(user_serializer.data)
        k = json.loads(j)
        print(k["pastPerformance"])
        return JsonResponse(k["pastPerformance"], safe=False)
    except User.DoesNotExist:
        return JsonResponse({"error":"The user does not exist in DB"}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def getAllUsers(request):
    try:
        user = User.objects.filter()
        user_serializer = UserSerializer(user, many=True)
        return JsonResponse(user_serializer.data, safe=False)
    except User.DoesNotExist:
        return JsonResponse({"error":"No users exist in DB"}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def deleteAllUsers(request):
    c = User.objects.all().delete()
    return JsonResponse({"message": "All Users were deleted successfully!".format(c[0])}, status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def addQuestion(request):
    try:
        question_data = JSONParser().parse(request)
        question_serializer = QuestionSerializer(data = question_data)
        if question_serializer.is_valid():
            question_serializer.save()
            return JsonResponse(question_serializer.data, status=status.HTTP_201_CREATED)      
        else:
            return JsonResponse(question_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    except:
        return JsonResponse({"error":"Could not save question in db"}, status.HTTP_406_NOT_ACCEPTABLE)

@api_view(['POST'])
def getAllQuestions(request):
    try:
        question = Question.objects.filter()
        question_serializer = QuestionSerializer(question, many=True)
        return JsonResponse(question_serializer.data, safe=False)
    except Question.DoesNotExist:
        return JsonResponse({"error":"No users exist in DB"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def deleteAllVideoFeeds(request):
    c = VideoFile.objects.all().delete()
    return JsonResponse({"message": "All Users were deleted successfully!".format(c[0])}, status=status.HTTP_204_NO_CONTENT)

class VideoFileView(APIView):
   
    parser_classes = (MultiPartParser, FormParser)
    
    def post(self, request, *args, **kwargs):
        video_file_serializer = VideoFileSerializer(data=request.data)
        if video_file_serializer.is_valid():
            video_file_serializer.save()
            fileName = 'media/'+ request.FILES['file'].name
            email =request.data['email']
            print("EMAIL +" + str(email))
            audioName = fileName[0:fileName.rindex("."):1]+".flac"
            gazeScore = self.gazeTrack(fileName)
            confidenceScore = self.ibmaudio(fileName, audioName) * 100

            # gazeScore = 25
            # confidenceScore = 29

            print("gaze score => " + str(gazeScore))
            print("Confidence Score => " + str(confidenceScore))

            userperformance = '[{"Concentration":'+str(gazeScore * 0.4 + confidenceScore * 0.6)+', "Clarity" : '+str(confidenceScore * 0.9)+',"Expression" : '+str(confidenceScore * 0.4)+',"Posture" : '+str(gazeScore * 0.7 + confidenceScore * 0.3)+',"Focus" : '+str(gazeScore * 0.8 + confidenceScore * 0.2)+',"Understanding" : '+str(gazeScore * 0.1 + confidenceScore * 0.9)+',"EyeContact" : '+str(gazeScore)+'}]'
            userperformance2 = '{"Concentration":'+str(gazeScore * 0.4 + confidenceScore * 0.6)+', "Clarity" : '+str(confidenceScore * 0.9)+',"Expression" : '+str(confidenceScore * 0.4)+',"Posture" : '+str(gazeScore * 0.7 + confidenceScore * 0.3)+',"Focus" : '+str(gazeScore * 0.8 + confidenceScore * 0.2)+',"Understanding" : '+str(gazeScore * 0.1 + confidenceScore * 0.9)+',"EyeContact" : '+str(gazeScore)+'}'
            
            performance = json.loads(userperformance)
            performance2 = json.loads(userperformance2)
            try:
                user = User.objects.get(email=email)
                user.addPerformance(performance)
                user.save()
                user_serializer = UserSerializer(user)
            except User.DoesNotExist:
                d=5

            #delete_audio_video_file
            os.remove(fileName)
            os.remove(audioName)
            c = VideoFile.objects.all().delete()

            #return results
            return JsonResponse(performance2, safe=False)
            # return JsonResponse(user_serializer.data, safe=False)
            # return Response(video_file_serializer.data, status=status.HTTP_201_CREATED)

        else:
            return Response(video_file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def gazeTrack(self, fileName):
        print("filename => "+fileName)
        gaze = GazeTracking()
        cap = cv2.VideoCapture(fileName)
        cap.set(3,640)
        cap.set(4,480)
        total = 1.0
        center = 1.0
        blink = 1.0
        other = 1.0
        k=4
        while (cap.isOpened()):
            for i in range (1,k) :
                ret, frame = cap.read()
            if ret == False:
                break
            gaze.refresh(frame)
            frame = gaze.annotated_frame()
            total += 1
            if gaze.is_blinking():
                blink +=1
            elif gaze.is_right():
                other += 1
            elif gaze.is_left():
                other += 1
            elif gaze.is_center():
                center += 1

            if cv2.waitKey(1) == 27:
                break

        cap.release()
        score = (total-blink-other+center)/total * 100.0
        return score

    def ibmaudio(self, fileName, audioName):
        command = "ffmpeg -i "+fileName+" -ab 160k -ac 2 -ar 44100 -vn "+audioName
        subprocess.call(command, shell=True)

        url = os.getenv('IBM_URL')
        apikey = os.getenv('IBM_KEY')
        headers = {
            'Content-type': 'audio/flac'
        }
        with open(audioName, 'rb') as f:
            data = f.read()
        res = requests.post(url,auth=('apikey',apikey),headers=headers, data=data)
        d = res.json()
        confidence = (d['results'][0]['alternatives'][0]["confidence"])
        return confidence