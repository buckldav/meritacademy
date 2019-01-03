from django.urls import path, re_path

from .views import CourseListView, CourseView, DisclosureDocumentView

urlpatterns = [
    path('courses', CourseListView.as_view()),
    path('courses/<pk>', CourseView.as_view()),
    re_path(r'disclosures\/(?P<course>.+)', DisclosureDocumentView.as_view())
]