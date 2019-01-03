from rest_framework.generics import ListAPIView, RetrieveAPIView 

from courses.models import Course, DisclosureDocument
from .serializers import CourseSerializer, DisclosureDocumentSerializer 

class CourseListView(ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseView(RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class DisclosureDocumentView(ListAPIView):
    serializer_class = DisclosureDocumentSerializer

    def get_queryset(self):
        """
        This view should return the Disclosure Documents
        related to the course
        """
        coursename = self.kwargs['course']
        return DisclosureDocument.objects.filter(course=coursename)