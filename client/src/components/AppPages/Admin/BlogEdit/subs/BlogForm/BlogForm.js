import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div, Form } from 'basedesign-iswad';
import { useRouter } from 'next/router';

import TextBox from '@/baseComponents/FormComps/TextBox';
import ImagePicker from '@/baseComponents/FormComps/ImagePicker';
import RichTextBox from '@/baseComponents/FormComps/RichTextBox';
import Button from '@/baseComponents/ReusableComps/Button';
import DivConvertTextToHtml from '@/baseComponents/ReusableComps/DivConvertTextToHtml';
import TextArea from '@/baseComponents/FormComps/TextArea';

import useApiCalls from '@/hooks/useApiCalls';
import { BLOG_DETAIL_API_ROUTE } from '@/constants/apiRoutes';
import { addAlertItem } from '@/utils/notifications';
import { PAGE_ROUTES } from '@/constants/vars';

import { customValidations } from '../../utils';
import styles from './BlogForm.module.scss';

const BlogForm = ({ slug }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [initialContent, setInitialContent] = useState('');
  const [initialContentUpdated, setInitialContentUpdated] = useState(false);
  const [photo, setPhoto] = useState('');
  const [initialPhoto, setInitialPhoto] = useState('');

  // ---------------------------------------------------------
  // ---------------------------------------------------------
  const [sendGetBlogReq, setSendGetBlogReq] = useState(false);
  const { data: getData, error: getError } = useApiCalls({
    sendReq: sendGetBlogReq,
    setSendReq: setSendGetBlogReq,
    method: 'GET',
    url: `${BLOG_DETAIL_API_ROUTE}${slug}/?${new URLSearchParams({
      is_published: 0
    })}`,
    isExternal: false
  });
  useEffect(() => {
    if (getData?.id) {
      setTitle(getData?.title);
      setInitialContent(getData?.content);
      setInitialPhoto(`${getData?.preview_photo}`);
      setExcerpt(getData?.excerpt);
    }
  }, [getData]);
  useEffect(() => {
    if (slug) {
      setSendGetBlogReq(true);
    }
  }, [slug]);
  // ---------------------------------------------------------
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  // ---------------------------------------------------------
  const [sendEditBlogReq, setSendEditBlogReq] = useState(false);
  const [bodyData, setBodyData] = useState();
  useEffect(() => {
    setBodyData(new FormData());
  }, []);
  const { data, error } = useApiCalls({
    sendReq: sendEditBlogReq,
    setSendReq: setSendEditBlogReq,
    method: 'PUT',
    url: `${BLOG_DETAIL_API_ROUTE}${slug}/`,
    isExternal: false,
    bodyData
  });

  useEffect(() => {
    if (data?.id) {
      addAlertItem(dispatch, `Blog has been updated successfully`, 'success');
      router.push(PAGE_ROUTES.ADMIN_BLOGS);
    }
  }, [data]);
  // ---------------------------------------------------------
  // ---------------------------------------------------------

  const submitHandler = () => {
    if (
      customValidations(
        dispatch,
        title,
        photo,
        content,
        excerpt,
        initialPhoto,
        initialContentUpdated
      )
    ) {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('preview_photo', photo);
      formData.append('excerpt', excerpt);
      formData.append('is_draft', true);
      if (!initialPhoto && photo) {
        formData.append('updated_file_fields', JSON.stringify(['preview_photo']));
      }
      setBodyData(formData);
    }
  };

  useEffect(() => {
    if (bodyData) {
      if (bodyData?.get('title') && bodyData?.get('content') && bodyData?.get('excerpt')) {
        setSendEditBlogReq(true);
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
          <TextArea
            isRequired
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
            initialSrc={initialPhoto}
            setInitialSrc={setInitialPhoto}
            initialSrcComesFromOurServer
            maxWidth={800}
          />
        </Div>

        <Div>
          <RichTextBox
            setText={(newContent) => {
              setInitialContentUpdated(true);
              setContent(newContent);
            }}
            id="blog-form-content-field"
            initialValue={initialContent}
            placeHolder="Type Something..."
          />
        </Div>

        <Div className="width-px-250">
          <Button type="submit" id="testFormSubmit">
            Submit
          </Button>
        </Div>
      </Form>

      <Div
        className="max-width-px-800 box-shadow-type-one p-all-temp-7 br-rad-lg m-t-temp-7 max-height-px-500 of-y-auto scroll-type-one"
        style={{ lineHeight: '40px' }}>
        <DivConvertTextToHtml text={content} />
      </Div>
    </>
  );
};

export default BlogForm;
