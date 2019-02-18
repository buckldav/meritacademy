from django.db import models

from courses.models import Course

class LinkCategory(models.Model):
    id = models.CharField(primary_key=True, max_length=50)
    def __str__(self):
        return str(self.id)

class Link(models.Model):
    description = models.TextField()
    linkText = models.CharField(max_length=200, blank=True, null=True) 
    linkUrl = models.CharField(max_length=200, blank=True, null=True)
    category = models.ForeignKey(LinkCategory, on_delete=models.CASCADE, default="student")
    
    def __str__(self):
        return str(self.category) + " " + str(self.linkText)