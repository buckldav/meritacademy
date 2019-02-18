from django.urls import path, re_path

from .views import LinksByCategoryView

urlpatterns = [
    re_path(r'links\/(?P<category>.+)', LinksByCategoryView.as_view()),
]