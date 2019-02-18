from django.contrib import admin

from .models import LinkCategory
from .models import Link

admin.site.register(LinkCategory)
admin.site.register(Link)
