# PrepHR Backend

Made with Django. Hosted on AWS.

## Instructions to run backend on your station.
---

### Pre-Installations :
- Install python and pip on your machine.
- Install CMake on your system. 
You can download it from [here](https://cmake.org/download/).
- Install FFMpeg on your system and set it in path variables. You can find a simple follow tutorial [here](http://thewindowsclub.com/how-to-install-ffmpeg-on-windows-10). For linux:
~~~
sudo add-apt-repository ppa:mc3man/trusty-media
sudo apt-get update
sudo apt-get install ffmpeg
~~~
- After entering this directory, open terminal and execute :
~~~
pip install -r "requirements.txt"
~~~
- Go to the directory :
~~~
/prephr-backend/apis/gaze_tracking/trained_model/
~~~
Download the pre-trained model for gaze tracking. Instructions given there.

### Setting up the environment variables :
- Make a .env file in this directory 
- Set up the following variables for your use:
~~~
MONGO_USERNAME = 'your_username'  
MONGO_PASSWORD = 'your_password'
DB_NAME = 'your_db_name'
DJANGO_SECRET = 'django_file_secret'
IBM_KEY = 'your_ibm_watson_speech_to_text_key'
IBM_URL = 'your_ibm_watson_speech_to_text_url'
~~~
You can get your db details on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and ibm keys [here](https://www.ibm.com/in-en/cloud/watson-speech-to-text)


### Running backend server:
- After all dependencies are installed, we can start to host our backend.
- Run the following commands to set up:
~~~
py manage.py makemigrations
py manage.py migrate
py manage.py runserver 8080
~~~
Here 8080 is your port number and since no url is mentioned it will be deployed on your localhost:8080 .

P.S. replace py with the python3 if it causes any errors. 

## Models in DB.
---
### User Model
- To store user details
- To track their past performances

### Question Model
 - To store different questions
 - To associate questions with a category.

### Performance Model
- To store results of each video processed.
- To associate them with users and track their record.

## End Points
---
- ```/api/user/addUser``` - To add a new User
- ```/api/user/getUser``` - To retreive all info of a user
- ```/api/user/getAllUsers``` - To get info of all users [debug]
- ```/api/user/deleteAllUsersUsers``` - To delete all users in db [debug]
- ```/api/user/deleteAllVideoFeeds``` - To delete all videofeeds uploaded to db [debug]
- ```/api/user/addUserPerformance``` - To add performance details of a user directly [debug]
- ```/api/user/getAllUserPerformances``` - To get all past performances of a given user
- ```/api/user/uploadUserVideo``` - To submit video of a user and score it and add the new results to db while returning values to user.
- ```/api/user/addQuestion``` - To add new Question to db.
- ```/api/user/getAllQuestions``` - To get all the questions present in database. 