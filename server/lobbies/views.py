from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, '', {})

def lobby(request, room_name):
    return render(request, '', {'room_name': room_name})
