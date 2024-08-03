import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import TopBar from './subs/TopBar';
import CourseForm from './subs/CourseForm';
import styles from './CourseEdit.module.scss';

const CourseEdit = ({ slug }) => {
  return (
    <>
      <Div className="m-b-temp-7">
        <TopBar />
      </Div>
      <Div>
        <CourseForm slug={slug} />
      </Div>
    </>
  );
};

export default CourseEdit;
