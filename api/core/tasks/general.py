from django.utils import timezone

from core.models import CaptchaModel

# ----------------------------------------------
# Periodic Tasks
# ----------------------------------------------


def remove_old_captcha():
    try:
        three_days_ago = timezone.now() - timezone.timedelta(seconds=72 * 60 * 60)
        count = 0
        captcha_queryset = CaptchaModel.objects.filter(
            created_at__lt=three_days_ago)
        if captcha_queryset.count():
            for item in captcha_queryset:
                item.delete()
                count += 1
    except Exception as e:
        print(str(e))
    return

# ----------------------------------------------
# ----------------------------------------------
