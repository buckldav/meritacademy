import uuid
from django.db import models

from courses.models import Course

class EventType(models.Model):
    id = models.CharField(primary_key=True, max_length=50)
    def __str__(self):
        return str(self.id)

class CalendarEvent(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    date = models.DateField()
    text = models.TextField()
    eventType = models.ForeignKey(EventType, on_delete=models.CASCADE, default="event")
    course = models.ForeignKey(Course, on_delete=models.CASCADE, default="Web Development")
    driveUrl = models.CharField(max_length=200, blank=True, null=True)
    def __str__(self):
        return str(self.course) + " " + str(self.eventType) + " " + str(self.date) + ": " + str(self.text)[:25] + "..."