from django.urls import path, re_path

from .views import EventListView, EventView, EventsByCourseView

urlpatterns = [
    path('events', EventListView.as_view()),
    re_path(r'events\/course\/(?P<course>.+)', EventsByCourseView.as_view()),
    path('events/<pk>', EventView.as_view()),
]