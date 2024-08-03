from rest_framework import serializers

from app.models import CourseModel


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseModel
        fields = ['id', 'uuid', 'price', 'slug', 'title', 'content',
                  'excerpt', 'preview_photo', 'preview_photo_from_url',
                  'created_at', 'updated_at', 'is_draft', 'meta_description',
                  'meta_keywords', 'page_title', 'img_alt', 'training_hours']
