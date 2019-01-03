from rest_framework import serializers

from courses.models import CourseGroup
from courses.models import Teacher 
from courses.models import Course 
from courses.models import DisclosureDocument

class CourseGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseGroup
        fields = ('name', 'icon')

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher 
        fields = ('name')

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course 
        fields = ('name', 'description', 'courseGroup', 'teacher', 'teacher2')

class DisclosureDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DisclosureDocument
        fields = ('driveUrl', 'course')


