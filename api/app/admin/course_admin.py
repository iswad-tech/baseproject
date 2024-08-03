from django.contrib import admin


class CourseAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'is_draft']
    list_editable = ['is_draft']
    list_per_page = 10
    search_fields = ['title__istartswith', 'slug__istartswith']
