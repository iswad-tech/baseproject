from django.conf import settings
import os
import boto3
from botocore.client import Config

ACCESS_KEY = settings.STORAGE_ACCESS_KEY
SECRET_KEY = settings.STORAGE_SECRET_KEY
END_POINT_URL = settings.STORAGE_END_POINT_URL
REGION = 'nyc3'  # Change this to your region (e.g., "nyc3", "ams3", "sgp1")

# Create a session
session = boto3.session.Session()

# Create the S3 client for DigitalOcean Spaces


def connect_to_storage():
    client = session.client(
        's3',
        region_name=REGION,
        endpoint_url=END_POINT_URL,
        aws_access_key_id=ACCESS_KEY,
        aws_secret_access_key=SECRET_KEY,
        config=Config(signature_version='s3v4')
    )
    return client


# Upload the file
file_path = os.path.join(settings.STATIC_ROOT,
                         "admin/img/calendar-icons.svg")


def upload_file_to_cloud(file_path=file_path, storage_space_name="images", file_key="nested/test_img.svg", file_type="private"):
    """file_type can be public-read or private"""
    try:
        client = connect_to_storage()
        client.upload_file(
            Filename=file_path,
            Bucket=storage_space_name,
            Key=file_key,
            ExtraArgs={'ACL': file_type}
        )
        return True
    except Exception as e:
        print(e)
        return False


def get_signed_url_of_file_from_cloud(storage_space_name="images", file_key="nested/test_img.svg"):
    try:
        client = connect_to_storage()
        # Generate a signed URL for the file
        signed_url = client.generate_presigned_url(
            'get_object',
            Params={'Bucket': storage_space_name, 'Key': file_key},
            ExpiresIn=3600  # URL valid for 1 hour
        )
        return signed_url
    except Exception as e:
        print(e)
        return ""


def get_url_from_cloud(storage_space_name="images", file_key="nested/test_img.svg", file_type="private"):
    try:
        if file_type == "private":
            return get_signed_url_of_file_from_cloud(storage_space_name, file_key)
        elif file_type == "public-read":
            return f"{settings.STORAGE_END_POINT_CDN_URL}/{file_key}"
        else:
            return get_signed_url_of_file_from_cloud(storage_space_name, file_key)
    except Exception as e:
        print(e)
        return ""


def delete_file_from_cloud(storage_space_name="images", file_key="nested/test_img.svg"):
    try:
        client = connect_to_storage()
        client.delete_object(
            Bucket=storage_space_name,
            Key=file_key
        )
        print(f"File '{file_key}' deleted successfully.")
        return True
    except Exception as e:
        print(e)
        return False
