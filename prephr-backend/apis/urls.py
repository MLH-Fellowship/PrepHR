from django.conf.urls import url 
from . import views 
 
urlpatterns = [ 
    url(r'^addUser$', views.addUser),
    url(r'^getUser$', views.getUser),
    url(r'^getAllUsers$', views.getAllUsers),
    url(r'^deleteAllUsers$', views.deleteAllUsers),
    url(r'^deleteAllVideoFeeds$', views.deleteAllVideoFeeds),
    url(r'^addUserPerformance$', views.addUserPerformance),
    url(r'^getAllUserPerformances$', views.getAllUserPerformances),
    url(r'^uploadUserVideo$', views.VideoFileView.as_view()),
    url(r'^addQuestion$', views.addQuestion),
    url(r'^getUser$', views.getUser),
    url(r'^getAllQuestions$', views.getAllQuestions),
]