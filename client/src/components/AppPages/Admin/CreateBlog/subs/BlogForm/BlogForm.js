import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div, Form } from 'basedesign-iswad';
import { useRouter } from 'next/router';

import TextBox from '@/baseComponents/FormComps/TextBox';
import ImagePicker from '@/baseComponents/FormComps/ImagePicker';
import RichTextBox from '@/baseComponents/FormComps/RichTextBox';
import Button from '@/baseComponents/ReusableComps/Button';

import useApiCalls from '@/hooks/useApiCalls';
import { BLOG_API_ROUTE } from '@/constants/apiRoutes';
import { addAlertItem } from '@/utils/notifications';
import { PAGE_ROUTES } from '@/constants/vars';

import { customValidations } from '../../utils';
import styles from './BlogForm.module.scss';

const BlogForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [photo, setPhoto] = useState('');

  // ---------------------------------------------------------
  // ---------------------------------------------------------
  const [sendCreateBlogReq, setSendCreateBlogReq] = useState(false);
  const [bodyData, setBodyData] = useState(new FormData());
  const { data, error } = useApiCalls({
    sendReq: sendCreateBlogReq,
    setSendReq: setSendCreateBlogReq,
    method: 'POST',
    url: `${BLOG_API_ROUTE}`,
    isExternal: false,
    bodyData
  });

  useEffect(() => {
    if (data?.id) {
      addAlertItem(dispatch, `Blog has been created successfully`, 'success');
      router.push(PAGE_ROUTES.ADMIN_BLOGS);
    }
  }, [data]);
  // ---------------------------------------------------------
  // ---------------------------------------------------------

  const submitHandler = () => {
    if (customValidations(dispatch, title, photo, content, excerpt)) {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('preview_photo', photo);
      formData.append('excerpt', excerpt);
      formData.append('is_draft', true);
      setBodyData(formData);
    }
  };

  useEffect(() => {
    if (bodyData) {
      if (
        bodyData?.get('title') &&
        bodyData?.get('content') &&
        bodyData?.get('preview_photo') &&
        bodyData?.get('excerpt')
      ) {
        setSendCreateBlogReq(true);
      }
    }
  }, [bodyData]);

  return (
    <>
      <Form
        className={cx('width-per-100 bg-white m-l-auto m-r-auto p-all-16 br-rad-px-10')}
        onSubmit={submitHandler}
        id="blog-form">
        <Div>
          <TextBox
            isRequired
            type="text"
            labelText="Title"
            val={title}
            setVal={setTitle}
            name="title"
            id="blog-form-title-field"
          />
        </Div>

        <Div>
          <TextBox
            isRequired
            type="text"
            labelText="Excerpt"
            val={excerpt}
            setVal={setExcerpt}
            name="excerpt"
            id="blog-form-excerpt-field"
          />
        </Div>

        <Div>
          <ImagePicker
            labelText="Cover Photo"
            isRequired
            file={photo}
            setFile={setPhoto}
            id="blog-form-image-field"
            hasCropper={false}
            hasResizer={false}
            maxWidth={800}
          />
        </Div>

        <Div>
          <RichTextBox
            setText={setContent}
            id="blog-form-content-field"
            // initialValue={""}
            placeHolder="Type Something..."
          />
        </Div>

        <Div className="width-px-250">
          <Button type="submit" id="testFormSubmit">
            Submit
          </Button>
        </Div>
      </Form>
    </>
  );
};

export default BlogForm;
