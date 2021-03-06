"""
Django settings for prephr project.

Generated by 'django-admin startproject' using Django 3.0.5.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os
from dotenv import load_dotenv
import urllib 
load_dotenv()

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MEDIA_URL = 'media/'
MEDIA_ROOT = os.path.join(BASE_DIR,"media")


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('DJANGO_SECRET')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'rest_framework',
    'apis.apps.ApisConfig',
    'corsheaders',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'social_django',
]

AUTHENTICATION_BACKENDS = (
    'social_core.backends.google.GoogleOAuth2',
    'django.contrib.auth.backends.ModelBackend',
)

SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = os.getenv('GAUTHCLIENTID')
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = os.getenv('GAUTHCLIENTSECRET')
LOGIN_URL = '/auth/login/google-oauth2/'
LOGIN_REDIRECT_URL = os.getenv('LOGINURL')
LOGOUT_REDIRECT_URL = os.getenv('LOGOUTURL')
SOCIAL_AUTH_URL_NAMESPACE = 'social'

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CORS_ORIGIN_ALLOW_ALL = True
# CORS_ORIGIN_WHITELIST = (
#     'http://localhost:8081',
# )

ROOT_URLCONF = 'prephr.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'prephr.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

dbUsername = os.getenv('MONGO_USERNAME')
dbPassword = os.getenv('MONGO_PASSWORD')
dbName = os.getenv('DB_NAME')
dbHost = 'mongodb+srv://'+urllib.parse.quote_plus(dbUsername)+':'+urllib.parse.quote_plus(dbPassword)+'@prephrcluster.hq52v.mongodb.net/'+dbName+'?retryWrites=true&w=majority'


# client = pymongo.MongoClient("mongodb+srv://"+dbUsername+":"+dbPassword+"@prephrcluster.hq52v.mongodb.net/"+dbName+"?retryWrites=true&w=majority")

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': dbName,
        'CLIENT' : {
            "name" : dbName,
            "host" : dbHost,
            "username" : dbUsername,
            "password" : dbPassword,
            "authMechanism" : "SCRAM-SHA-1",
        }
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]



# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = '/static/'
