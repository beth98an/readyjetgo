from django.http import HttpResponse

def index(req):
    return HttpResponse("<h1>Hello!Do you want the travel bug?<h1>")

