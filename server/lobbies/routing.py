from django.urls import re_path

from . import consumers

websocket_urlpatterns = [
    # We use re_path() due to limitations in URLRouter.
    re_path(r"ws/job-status/$", consumers.TravelConsumer.as_asgi()),
]
