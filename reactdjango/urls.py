from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from .views import youtube_download, delete_file

urlpatterns = [
  path('admin/', admin.site.urls),
  path('api-auth/', include('rest_framework.urls')),
  path('api/', include('courses.api.urls')),
  path('api/', include('calendarevents.api.urls')),
  path('api/', include('links.api.urls')),
  path('youtube', youtube_download, name="yt"),
  path('youtube/delete', delete_file, name="yt_delete"),
  re_path('.*', TemplateView.as_view(template_name='index.html')),
]