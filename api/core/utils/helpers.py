from django.conf import settings
from django.db.models import Func, Q
from django.contrib.auth.models import Group
from django.contrib.auth import get_user_model
from django.core.files.temp import NamedTemporaryFile
from django.core.files import File
import random
import string
import os
from datetime import datetime
import calendar
import requests
import json
import bleach

from core.utils.storage import upload_file_to_cloud, delete_file_from_cloud


User = get_user_model()


def createNewGroup():
    group_name = ""
    while not group_name:
        group_name = input("What is the new group's name? ")
    new_group, created = Group.objects.get_or_create(name=group_name)
    if created:
        print(f"New group named {new_group} created successfully!")
    else:
        print(
            f"We couldn't create a group with name {group_name}. So, it seems {group_name} has already been declared as a group name.")
    return


def code_generator(size=16, chars=string.ascii_uppercase + string.ascii_lowercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


def get_last_12_months():
    ARRAY_OF_MONTHS = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    today = datetime.today().date().replace(day=1)
    cur_year = today.year
    cur_month = today.month
    months = []
    for m in range(1, cur_month + 1):
        cur_month = datetime(cur_year, m, 1).date()
        last_day_of_current_month = calendar.monthrange(
            cur_month.year, cur_month.month)[1]
        months += [cur_month.replace(day=last_day_of_current_month)]
    months.reverse()
    if len(months) < 12:
        cur_year -= 1
        for m in ARRAY_OF_MONTHS:
            cur_month = datetime(cur_year, m, 1).date()
            last_day_of_current_month = calendar.monthrange(
                cur_month.year, cur_month.month)[1]
            months += [cur_month.replace(day=last_day_of_current_month)]
            if len(months) == 12:
                break
    return months


def get_months_of_year(year):
    ARRAY_OF_MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    today = datetime.today().date().replace(day=1)
    cur_year = today.year
    cur_month = today.month
    months = []
    if year == cur_year:
        for m in range(1, cur_month + 1):
            cur_month = datetime(year, m, 1).date()
            last_day_of_current_month = calendar.monthrange(
                cur_month.year, cur_month.month)[1]
            months += [cur_month.replace(day=last_day_of_current_month)]
    else:
        for m in ARRAY_OF_MONTHS:
            cur_month = datetime(year, m, 1).date()
            last_day_of_current_month = calendar.monthrange(
                cur_month.year, cur_month.month)[1]
            months += [cur_month.replace(day=last_day_of_current_month)]
            if len(months) == 12:
                break
    return months


def find_post_fix_of_a_file(file):
    sent_file_name = f"{file}"
    splitted_text = sent_file_name.split(".")
    post_fix = splitted_text.pop()
    file_name = ""
    for item in splitted_text:
        file_name += item
    return post_fix, file_name


def save_file_from_url(file_field, file_url):
    response = requests.get(file_url)

    if response.status_code == 200:
        img_temp = NamedTemporaryFile(delete=True)
        img_temp.write(response.content)
        img_temp.flush()
        file_name = file_url.split("/")[-1]
        file_field.save(
            f"{file_name}", File(img_temp), save=True)


def clear_file_field_of_schema(file_field):
    file_path = ""
    if file_field:
        file_path = file_field.path
        if file_path:
            if os.path.exists(file_path):
                os.remove(file_path)


def add_image_to_file_field(file_field, new_file_uploaded):
    postfix, sent_file_name = find_post_fix_of_a_file(new_file_uploaded)
    file_name = f"{sent_file_name}-{code_generator(16)}.{postfix}"
    file_field.save(file_name, new_file_uploaded)


def update_file_field(remove_prev_file, file_field, new_file_uploaded):
    try:
        if remove_prev_file:
            clear_file_field_of_schema(file_field)
        if new_file_uploaded:
            clear_file_field_of_schema(file_field)
            add_image_to_file_field(file_field, new_file_uploaded)

    except Exception as e:
        pass


def add_row_to_schema(model, request, acceptable_not_date_fields, date_fields=[], file_fields_for_cloud=[], required_fields=[]):
    try:
        cur_row = model()
        required_fields_passed = True
        for item in required_fields:
            if item in request.data:
                if not request.data.get(item, ""):
                    required_fields_passed = False
                    break
        if required_fields_passed:
            for attr in request.data:
                if attr in file_fields_for_cloud:
                    file = request.FILES[attr]
                    if file:
                        rand_str_1 = code_generator()
                        rand_str_2 = code_generator()
                        file_key = f"{rand_str_1}_{rand_str_2}_{file}"
                        storage_space_name = file_fields_for_cloud[attr]["storage_space_name"]
                        upload_file_to_cloud(file=file, storage_space_name=storage_space_name, file_key=file_key,
                                             file_type=file_fields_for_cloud[attr]["file_type"], is_from_client=True)
                        setattr(
                            cur_row, attr, f"{settings.STORAGE_END_POINT_URL}/{storage_space_name}/{file_key}")
                elif attr in acceptable_not_date_fields:
                    if request.data.get(attr, ""):
                        setattr(cur_row, attr, request.data.get(attr))
                elif attr in date_fields:
                    if request.data.get(attr, ""):
                        setattr(cur_row, attr, datetime.strptime(
                            request.data.get(attr), "%Y-%m-%d").date())
            if required_fields_passed:
                cur_row.save()
                return {"success": True, "cur_row": cur_row}
        return {"success": False, "message": "Required fields should not be empty"}
    except Exception as e:
        return {"success": False, "message": f"{str(e)}"}


def update_row_of_schema(request, cur_schema_qs, updatable_non_file_nor_date_fields, date_fields=[], file_fields=[], file_fields_for_cloud={}, required_fields=[]):
    try:
        update_kwargs = {}
        required_fields_passed = True
        for item in required_fields:
            if item in request.data:
                if not request.data.get(item, ""):
                    required_fields_passed = False
                    break
        if required_fields_passed:
            if request.data:
                for attr in request.data:
                    if attr in updatable_non_file_nor_date_fields:
                        update_kwargs[attr] = request.data.get(attr, "")
                    if attr in date_fields:
                        if request.data.get(attr, ""):
                            update_kwargs[attr] = datetime.strptime(
                                request.data.get(attr), "%Y-%m-%d").date()
                cur_schema_qs.update(**update_kwargs)
                # HNDLE FILE FIELDS
                removable_file_fields = request.data.get(
                    "removable_file_fields", [])
                updated_file_fields = request.data.get(
                    "updated_file_fields", [])
                if file_fields:
                    for field in file_fields:
                        update_kwargs = {}
                        if removable_file_fields and field in json.loads(removable_file_fields):
                            file_field = getattr(
                                cur_schema_qs.first(), field, None)
                            clear_file_field_of_schema(file_field)
                            update_kwargs[field] = None
                            cur_schema_qs.update(**update_kwargs)
                        if updated_file_fields and field in json.loads(updated_file_fields):
                            file_field = getattr(
                                cur_schema_qs.first(), field, None)
                            clear_file_field_of_schema(file_field)
                            update_kwargs[field] = None
                            cur_schema_qs.update(**update_kwargs)
                            new_file_uploaded = request.data.get(
                                field, None)
                            if new_file_uploaded:
                                add_image_to_file_field(
                                    file_field, new_file_uploaded)

                if file_fields_for_cloud:
                    for field in file_fields_for_cloud:
                        update_kwargs = {}
                        if removable_file_fields and field in json.loads(removable_file_fields):
                            file_url = getattr(
                                cur_schema_qs.first(), field, "")
                            if file_url:
                                storage_space_name = file_fields_for_cloud[field]["storage_space_name"]
                                file_key = file_url.split(
                                    f'/{storage_space_name}/')[1]
                                delete_file_from_cloud(
                                    storage_space_name=storage_space_name, file_key=file_key)
                            update_kwargs[field] = ""
                            cur_schema_qs.update(**update_kwargs)
                        if updated_file_fields and field in json.loads(updated_file_fields):
                            file_url = getattr(
                                cur_schema_qs.first(), field, "")
                            if file_url:
                                storage_space_name = file_fields_for_cloud[field]["storage_space_name"]
                                file_key = file_url.split(
                                    f'/{storage_space_name}/')[1]
                                file = request.FILES[field]
                                if file:
                                    rand_str_1 = code_generator()
                                    rand_str_2 = code_generator()
                                    new_file_key = f"{rand_str_1}_{rand_str_2}_{file}"
                                    storage_space_name = file_fields_for_cloud[attr]["storage_space_name"]
                                    upload_file_to_cloud(file=file, storage_space_name=storage_space_name, file_key=new_file_key,
                                                         file_type=file_fields_for_cloud[attr]["file_type"], is_from_client=True)
                                    update_kwargs[field] = f"{settings.STORAGE_END_POINT_URL}/{storage_space_name}/{new_file_key}"
                                    cur_schema_qs.update(**update_kwargs)
                                    try:
                                        delete_file_from_cloud(
                                            storage_space_name=storage_space_name, file_key=file_key)
                                    except Exception as e:
                                        print(e)
                return {"success": True, "cur_schema": cur_schema_qs.first()}
            return {"success": False, "message": "No data provided"}
        return {"success": False, "message": "Required fields should not be empty"}
    except Exception as e:
        return {"success": False, "message": f"{str(e)}"}


def delete_row_of_schema(cur_schema, removable_file_fields=[], file_fields_for_cloud={}):
    try:
        for field in removable_file_fields:
            if field in file_fields_for_cloud:
                file_url = getattr(cur_schema, field, "")
                if file_url:
                    storage_space_name = file_fields_for_cloud[field]["storage_space_name"]
                    file_key = file_url.split(f'/{storage_space_name}/')[1]
                    try:
                        delete_file_from_cloud(
                            storage_space_name=storage_space_name, file_key=file_key)
                    except Exception as e:
                        print(e)
            else:
                file_field = getattr(cur_schema, field, None)
                clear_file_field_of_schema(file_field)
        cur_schema.delete()
        return {"success": True}
    except Exception as e:
        return {"success": False, "message": f"{str(e)}"}


def strip_html_tags(text):
    return bleach.clean(text, tags=[], strip=True)


class StripHTML(Func):
    function = 'REGEXP_REPLACE'
    template = "%(function)s(%(expressions)s, '<[^>]*>', '', 'g')"
