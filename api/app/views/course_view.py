from django.db.models import F, Q
from rest_framework import views, viewsets, permissions, response, status
import json

from core.permissions import *
from core.pagination import PaginationType1
from core.utils.helpers import add_row_to_schema, update_row_of_schema, delete_row_of_schema, StripHTML
from app.models import CourseModel
from app.serializers import CourseSerializer


class CourseViewSet(views.APIView):
    permission_classes = [IsAdminOrReadOnly]

    def get(self, request, format=None):
        try:
            NUMBER_OF_COURSES_IN_PAGE = 12
            is_published = bool(int(
                request.GET.get("is_published", 1)))
            page_number = int(request.GET.get("page_number", 1))
            first_item = (page_number - 1) * NUMBER_OF_COURSES_IN_PAGE
            last_item = page_number * NUMBER_OF_COURSES_IN_PAGE - 1
            filter = json.loads(request.GET.get(
                "filter", '{"title": "", "content": "", "excerpt": ""}'))
            query_filter = Q()
            for field, value in filter.items():
                if value:
                    if field == "content":
                        query_filter &= Q(**{f"plain_text__icontains": value})
                    else:
                        query_filter &= Q(**{f"{field}__icontains": value})
            if is_published:
                query_filter &= Q(is_draft=False)
            annotated_blogs = CourseModel.objects.annotate(
                plain_text=StripHTML(F('content')))
            courses = annotated_blogs.filter(query_filter).order_by(
                "-created_at", "title")[first_item: last_item + 1]
            courses_count = annotated_blogs.filter(query_filter).count()
            serializer = CourseSerializer(courses, many=True)
            return response.Response(status=status.HTTP_200_OK, data={"courses": serializer.data, "number_of_courses": courses_count, "number_of_courses_in_page": NUMBER_OF_COURSES_IN_PAGE})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})

    def post(self, request, format=None):
        try:
            obj = add_row_to_schema(model=CourseModel, request=request, acceptable_not_date_fields=[
                                    "title", "excerpt", "content", "preview_photo"], date_fields=[], required_fields=["title", "excerpt", "content", "preview_photo"])
            if obj["success"]:
                serializer = CourseSerializer(obj["cur_row"])
                return response.Response(status=status.HTTP_201_CREATED, data=serializer.data)
            else:
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": obj["message"]})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})


class CourseDetailViewSet(views.APIView):
    permission_classes = [IsAdminOrReadOnly]

    def get(self, request, slug, format=None):
        try:
            is_published = bool(int(
                request.GET.get("is_published", 1)))
            if is_published:
                cur_course = CourseModel.objects.filter(
                    slug=slug, is_draft=False).first()
            else:
                cur_course = CourseModel.objects.filter(slug=slug).first()
            if cur_course:
                serializer = CourseSerializer(cur_course)
                return response.Response(status=status.HTTP_200_OK, data=serializer.data)
            return response.Response(status=status.HTTP_404_NOT_FOUND, data={"message": "No data found with the current url!"})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})

    def put(self, request, slug, format=None):
        try:
            cur_course_qs = CourseModel.objects.filter(slug=slug)
            if cur_course_qs:
                obj = update_row_of_schema(request=request, cur_schema_qs=cur_course_qs, updatable_non_file_nor_date_fields=[
                                           "title", "excerpt", "content"], date_fields=[], file_fields=["preview_photo"], required_fields=["title", "excerpt", "content"])
                if obj["success"]:
                    serializer = CourseSerializer(obj["cur_schema"])
                    return response.Response(status=status.HTTP_200_OK, data=serializer.data)
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": obj["message"]})
            return response.Response(status=status.HTTP_404_NOT_FOUND, data={"message": f"No blug found with slug {slug}"})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})

    def delete(self, request, slug, format=None):
        try:
            cur_course = CourseModel.objects.filter(slug=slug).first()
            if cur_course:
                obj = delete_row_of_schema(
                    cur_schema=cur_course, removable_file_fields=["preview_photo"])
                if obj["success"]:
                    return response.Response(status=status.HTTP_200_OK, data={"success": True})
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": obj["message"]})
            return response.Response(status=status.HTTP_404_NOT_FOUND, data={"message": f"No blug found with slug {slug}"})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})
