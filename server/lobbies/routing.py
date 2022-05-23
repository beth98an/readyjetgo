from django.urls import re_path

from . import consumers

websocket_urlpatterns = [
    # We use re_path() due to limitations in URLRouter.
   re_path(r'ws/lobbies/(?P<lobby_session>\w+)/$', consumers.TravelConsumer.as_asgi()),
]
