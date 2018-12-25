from django.urls import path

from .views import CourseListView, CourseView

urlpatterns = [
    path('courses', CourseListView.as_view()),
    path('courses/<pk>', CourseView.as_view())
]