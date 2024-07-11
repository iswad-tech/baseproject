from rest_framework import serializers

from core.models import UserModel, ProfileModel
from core.serializers import ProfileSerializer
from app.models import BlogModel, BlogLabelModel


class BlogSerializer(serializers.ModelSerializer):
    writer = serializers.SerializerMethodField('get_writer')
    labels = serializers.SerializerMethodField('get_labels')

    def get_writer(self, obj):
        try:
            cur_writer = UserModel.objects.filter(id=obj.writer_id).first()
            if cur_writer:
                cur_profile = ProfileModel.objects.filter(
                    id=cur_writer.id).first()
                if cur_profile:
                    return ProfileSerializer(cur_profile).data
                return {}
            return {}
        except Exception as e:
            return {}

    def get_labels(self, obj):
        blog_label_qs = BlogLabelModel.objects.filter(blog_id=obj.id)
        labels = {"categories": [], "tags": []}
        if blog_label_qs:
            for blog_label in blog_label_qs:
                if blog_label.label.label_type == "CATEGORY":
                    labels["categories"] += [blog_label.label.title]
                elif blog_label.label.label_type == "TAG":
                    labels["tags"] += [blog_label.label.title]
        return labels

    class Meta:
        model = BlogModel
        fields = ['id', 'uuid', 'writer', 'slug', 'title', 'content',
                  'excerpt', 'preview_photo', 'preview_photo_from_url',
                  'published_date', 'is_popular', 'created_at', 'updated_at',
                  'labels', 'is_draft', 'is_featured', 'meta_description',
                  'meta_keywords', 'page_alt']
