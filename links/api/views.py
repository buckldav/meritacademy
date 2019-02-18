from rest_framework.generics import ListAPIView

from links.models import Link
from .serializers import LinkSerializer 

class LinksByCategoryView(ListAPIView):
    serializer_class = LinkSerializer

    def get_queryset(self):
        """
        This view should return a list of all the links
        related to a category
        """
        categoryname = self.kwargs['category']
        return Link.objects.filter(category=categoryname)