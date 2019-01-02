from rest_framework import serializers

from calendarevents.models import EventType, CalendarEvent

class EventTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventType
        fields = ('id')

class CalendarEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = CalendarEvent
        fields = ('id', 'date', 'text', 'eventType', 'course', 'link', 'linkText')