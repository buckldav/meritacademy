from rest_framework.generics import ListAPIView, RetrieveAPIView 

from calendarevents.models import CalendarEvent
from .serializers import CalendarEventSerializer 

class EventListView(ListAPIView):
    queryset = CalendarEvent.objects.all()
    serializer_class = CalendarEventSerializer

class EventView(RetrieveAPIView):
    queryset = CalendarEvent.objects.all()
    serializer_class = CalendarEventSerializer

class EventsByCourseView(ListAPIView):
    serializer_class = CalendarEventSerializer

    def get_queryset(self):
        """
        This view should return a list of all the events
        related to the course
        """
        coursename = self.kwargs['course']
        return CalendarEvent.objects.filter(course=coursename)