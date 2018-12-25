from django.contrib import admin

from .models import CourseGroup
from .models import Teacher
from .models import Course

admin.site.register(CourseGroup)
admin.site.register(Teacher)
admin.site.register(Course)