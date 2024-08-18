from . import contact_form_view, web_subscriber_view, blog_view, course_view

ContactFormViewSet = contact_form_view.ContactFormViewSet.as_view()

WebSubscriberViewSet = web_subscriber_view.WebSubscriberViewSet.as_view()

BlogViewSet = blog_view.BlogViewSet.as_view()
BlogDetailViewSet = blog_view.BlogDetailViewSet.as_view()
LabelViewSet = blog_view.LabelViewSet.as_view()

CourseViewSet = course_view.CourseViewSet.as_view()
CourseDetailViewSet = course_view.CourseDetailViewSet.as_view()
