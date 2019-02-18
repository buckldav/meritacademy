from rest_framework import serializers

from links.models import LinkCategory, Link

class LinkCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = LinkCategory
        fields = ('id')

class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = ('description', 'linkUrl', 'linkText', 'category')