from django.contrib import admin

from .models import EventType
from .models import CalendarEvent

admin.site.register(EventType)
admin.site.register(CalendarEvent)