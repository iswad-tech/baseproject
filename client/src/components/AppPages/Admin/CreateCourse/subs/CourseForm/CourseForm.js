import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div, Form } from 'basedesign-iswad';
import { useRouter } from 'next/router';

import TextBox from '@/baseComponents/FormComps/TextBox';
import ImagePicker from '@/baseComponents/FormComps/ImagePicker';
import RichTextBox from '@/baseComponents/FormComps/RichTextBox';
import Button from '@/baseComponents/ReusableComps/Button';
import TextArea from '@/baseComponents/FormComps/TextArea';
import DivConvertTextToHtml from '@/baseComponents/ReusableComps/DivConvertTextToHtml';

import useApiCalls from '@/hooks/useApiCalls';
import { COURSE_API_ROUTE } from '@/constants/apiRoutes';
import { addAlertItem } from '@/utils/notifications';
import { PAGE_ROUTES } from '@/constants/vars';

import { customValidations } from '../../utils';
import styles from './CourseForm.module.scss';

const CourseForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [photo, setPhoto] = useState('');

  // ---------------------------------------------------------
  // ---------------------------------------------------------
  const [sendCreateCourseReq, setSendCreateCourseReq] = useState(false);
  const [bodyData, setBodyData] = useState(new FormData());
  const { data, error } = useApiCalls({
    sendReq: sendCreateCourseReq,
    setSendReq: setSendCreateCourseReq,
    method: 'POST',
    url: `${COURSE_API_ROUTE}`,
    isExternal: false,
    bodyData
  });

  useEffect(() => {
    if (data?.id) {
      addAlertItem(dispatch, `Course has been created successfully`, 'success');
      router.push(PAGE_ROUTES.ADMIN_COURSES);
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
        setSendCreateCourseReq(true);
      }
    }
  }, [bodyData]);

  return (
    <>
      <Form
        className={cx('width-per-100 bg-white m-l-auto m-r-auto p-all-16 br-rad-px-10')}
        onSubmit={submitHandler}
        id="course-form">
        <Div>
          <TextBox
            isRequired
            type="text"
            labelText="Title"
            val={title}
            setVal={setTitle}
            name="title"
            id="course-form-title-field"
          />
        </Div>

        <Div>
          <TextArea
            isRequired
            labelText="Excerpt"
            val={excerpt}
            setVal={setExcerpt}
            name="excerpt"
            id="course-form-excerpt-field"
          />
        </Div>

        <Div>
          <ImagePicker
            labelText="Cover Photo"
            isRequired
            file={photo}
            setFile={setPhoto}
            id="course-form-image-field"
            hasCropper={false}
            hasResizer={false}
            maxWidth={800}
          />
        </Div>

        <Div>
          <RichTextBox
            setText={setContent}
            id="course-form-content-field"
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

      <Div
        className="max-width-px-800 box-shadow-type-one p-all-temp-7 br-rad-lg m-t-temp-7 max-height-px-500 of-y-auto scroll-type-one"
        style={{ lineHeight: '40px' }}>
        <DivConvertTextToHtml text={content} />
      </Div>
    </>
  );
};

export default CourseForm;
