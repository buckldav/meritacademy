from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView

urlpatterns = [
  path('admin/', admin.site.urls),
  path('api-auth/', include('rest_framework.urls')),
  path('api/', include('courses.api.urls')),
  path('api/', include('calendarevents.api.urls')),
  path('projects/games/', include('games.urls')),
  re_path('.*', TemplateView.as_view(template_name='index.html')),
]