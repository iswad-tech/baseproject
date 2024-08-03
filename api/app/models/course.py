from django.db import models
from django.conf import settings
from django.core.validators import FileExtensionValidator
from django.utils.text import slugify

from core.models.general import TimeStampedUUIDModel


class Course(TimeStampedUUIDModel):
    title = models.CharField(null=True, blank=True, max_length=2048)
    content = models.TextField(null=True, blank=True)
    excerpt = models.CharField(null=True, blank=True, max_length=2048)
    preview_photo = models.FileField(upload_to='courses/', null=True, blank=True,
                                     validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png'])])
    preview_photo_from_url = models.CharField(
        null=True, blank=True, max_length=2048)
    slug = models.SlugField(unique=True, blank=True, max_length=2048)
    is_draft = models.BooleanField(default=True)
    meta_description = models.CharField(
        default="Explore comprehensive development courses at ISWAD Tech. Learn front-end and back-end development, programming essentials, API integration, and DevOps practices. Our expertly crafted courses provide hands-on experience and real-world projects, empowering you to build a robust portfolio and advance your tech career. Join ISWAD Tech and master the skills needed to excel in the ever-evolving tech industry.", max_length=2048)
    meta_keywords = models.CharField(
        default="Development Courses, Front-end Development, Back-end Development, Programming Essentials, API Integration, DevOps Practices, Tech Skills, Real-world Projects, Tech Career Advancement, ISWAD Tech Courses", max_length=2048)
    page_title = models.CharField(default="Learning | ISWAD", max_length=2048)
    img_alt = models.CharField(default="Learning ISWAD", max_length=2048)
    price = models.FloatField(default=0)
    training_hours = models.IntegerField(default=0)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Courses"
        ordering = ('-created_at', 'title')
