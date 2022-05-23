from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, '', {})

def lobby(request, lobby_session):
    return render(request, '', {'lobby_session': lobby_session})
