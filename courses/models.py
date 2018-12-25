from django.db import models

class CourseGroup(models.Model):
    name = models.CharField(max_length=50, primary_key=True)
    icon = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Teacher(models.Model):
    name = models.CharField(max_length=50, primary_key=True)
    def __str__(self):
        return self.name

class Course(models.Model):
    name = models.CharField(max_length=50, primary_key=True)
    description = models.TextField()
    courseGroup = models.ForeignKey(CourseGroup, on_delete=models.CASCADE, default="Capture")
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, default="David Buckley", related_name="primary")
    teacher2 = models.ForeignKey(Teacher, on_delete=models.CASCADE, blank=True, null=True, related_name="secondary")
    def __str__(self):
        return self.name