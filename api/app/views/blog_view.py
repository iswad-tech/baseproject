from django.db.models import F, Q
from rest_framework import views, viewsets, permissions, response, status
import json

from core.permissions import *
from core.pagination import PaginationType1
from core.utils.helpers import add_row_to_schema, update_row_of_schema, delete_row_of_schema, StripHTML
from app.models import BlogModel, LabelModel
from app.serializers import BlogSerializer, LabelSerializer


class BlogViewSet(views.APIView):
    permission_classes = [IsBlogWriterOrReadOnly]

    def get(self, request, format=None):
        try:
            NUMBER_OF_BLOGS_IN_PAGE = 12
            is_popular_posts = bool(int(
                request.GET.get("is_popular_posts", 0)))
            is_published = bool(int(
                request.GET.get("is_published", 1)))
            is_featured = bool(int(
                request.GET.get("is_featured", 0)))
            page_number = int(request.GET.get("page_number", 1))
            first_item = (page_number - 1) * NUMBER_OF_BLOGS_IN_PAGE
            last_item = page_number * NUMBER_OF_BLOGS_IN_PAGE - 1
            filter = json.loads(request.GET.get(
                "filter", '{"title": "", "content": "", "excerpt": "", "tag": "", "category": ""}'))
            query_filter = Q()
            tag_filter = Q()
            cat_filter = Q()
            for field, value in filter.items():
                if value:
                    if field == "tag":
                        tag_filter &= Q(
                            **{f"blog_label_blog__label__uuid__icontains": value}) & Q(
                            **{f"blog_label_blog__label__label_type": "TAG"})
                    elif field == "category":
                        cat_filter &= Q(
                            **{f"blog_label_blog__label__uuid__icontains": value}) & Q(
                            **{f"blog_label_blog__label__label_type": "CATEGORY"})
                    elif field == "content":
                        query_filter &= Q(**{f"plain_text__icontains": value})
                    else:
                        query_filter &= Q(**{f"{field}__icontains": value})
            if is_published:
                query_filter &= Q(is_draft=False)
            if is_popular_posts:
                query_filter &= Q(is_popular=True)
            if is_featured:
                query_filter &= Q(is_featured=True)
            annotated_blogs = BlogModel.objects.annotate(
                plain_text=StripHTML(F('content')))
            blogs = annotated_blogs.filter(cat_filter).filter(tag_filter).filter(query_filter).order_by(
                "-updated_at", "title")[first_item: last_item + 1]
            blogs_count = annotated_blogs.filter(cat_filter).filter(
                tag_filter).filter(query_filter).count()
            serializer = BlogSerializer(blogs, many=True)
            return response.Response(status=status.HTTP_200_OK, data={"blogs": serializer.data, "number_of_blogs": blogs_count, "number_of_blogs_in_page": NUMBER_OF_BLOGS_IN_PAGE})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})

    def post(self, request, format=None):
        try:
            file_fields_for_cloud = {"preview_photo": {
                "storage_space_name": "blogs", "file_type": "public-read", "file_key_pre_txt": ""}}
            obj = add_row_to_schema(model=BlogModel, request=request, acceptable_not_date_fields=["title", "excerpt", "content"], date_fields=[
                                    "published_date"], file_fields_for_cloud=file_fields_for_cloud, required_fields=["title", "excerpt", "content", "preview_photo"])
            if obj["success"]:
                serializer = BlogSerializer(obj["cur_row"])
                return response.Response(status=status.HTTP_201_CREATED, data=serializer.data)
            else:
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": obj["message"]})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})


class BlogDetailViewSet(views.APIView):
    permission_classes = [IsBlogWriterOrReadOnly]

    def get(self, request, slug, format=None):
        try:
            is_published = bool(int(
                request.GET.get("is_published", 1)))
            if is_published:
                cur_blog = BlogModel.objects.filter(
                    slug=slug, is_draft=False).first()
            else:
                cur_blog = BlogModel.objects.filter(slug=slug).first()
            if cur_blog:
                serializer = BlogSerializer(cur_blog)
                return response.Response(status=status.HTTP_200_OK, data=serializer.data)
            return response.Response(status=status.HTTP_404_NOT_FOUND, data={"message": "No data found with the current url!"})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})

    def put(self, request, slug, format=None):
        try:
            cur_blog_qs = BlogModel.objects.filter(slug=slug)
            file_fields_for_cloud = {"preview_photo": {
                "storage_space_name": "blogs", "file_type": "public-read", "file_key_pre_txt": ""}}
            if cur_blog_qs:
                obj = update_row_of_schema(request=request, cur_schema_qs=cur_blog_qs, updatable_non_file_nor_date_fields=["title", "excerpt", "content"], date_fields=[
                    "published_date"], file_fields_for_cloud=file_fields_for_cloud, required_fields=["title", "excerpt", "content"])
                if obj["success"]:
                    serializer = BlogSerializer(obj["cur_schema"])
                    return response.Response(status=status.HTTP_200_OK, data=serializer.data)
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": obj["message"]})
            return response.Response(status=status.HTTP_404_NOT_FOUND, data={"message": f"No blug found with slug {slug}"})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})

    def delete(self, request, slug, format=None):
        try:
            cur_blog = BlogModel.objects.filter(slug=slug).first()
            if cur_blog:
                file_fields_for_cloud = {"preview_photo": {
                    "storage_space_name": "blogs"}}
                obj = delete_row_of_schema(
                    cur_schema=cur_blog, removable_file_fields=["preview_photo"], file_fields_for_cloud=file_fields_for_cloud)
                if obj["success"]:
                    return response.Response(status=status.HTTP_200_OK, data={"success": True})
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": obj["message"]})
            return response.Response(status=status.HTTP_404_NOT_FOUND, data={"message": f"No blug found with slug {slug}"})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})


class LabelViewSet(views.APIView):
    permission_classes = [IsBlogWriterOrReadOnly]

    def get(self, request, format=None):
        try:
            type = request.GET.get("type", "tag")
            if type == "tag":
                labels = LabelModel.objects.filter(
                    label_type="TAG").order_by("title")
            if type == "category":
                labels = LabelModel.objects.filter(
                    label_type="CATEGORY").order_by("title")
            serializer = LabelSerializer(labels, many=True)
            return response.Response(status=status.HTTP_200_OK, data={"labels": serializer.data})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})
