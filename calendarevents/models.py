import uuid
from django.db import models

from courses.models import Course

class CalendarEvent(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    date = models.DateField()
    text = models.TextField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE, default="Web Development")
    def __str__(self):
        return str(self.course) + " " + str(self.date) + ": " + str(self.text)[:20] + "..."