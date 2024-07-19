# Generated by Django 4.2.13 on 2024-07-11 22:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_blog_is_featured'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='meta_description',
            field=models.CharField(default="Stay updated with ISWAD Tech's Blog. Discover insights, tips, and industry trends on MVP development, web app creation, branding, and more. Our expert articles provide valuable knowledge to help your business grow and succeed. Explore innovative ideas and solutions with ISWAD Tech today.", max_length=2048),
        ),
        migrations.AddField(
            model_name='blog',
            name='meta_keywords',
            field=models.CharField(default='Tech Blog, Industry Insights, Latest Tech Trends, AI Innovations, Software Development Tips, Tech News, Business Technology, Digital Transformation, Expert Opinions, Innovation Articles', max_length=2048),
        ),
        migrations.AddField(
            model_name='blog',
            name='page_alt',
            field=models.CharField(default='Blog | ISWAD', max_length=2048),
        ),
    ]