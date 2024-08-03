import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import TopBar from './subs/TopBar';
import CourseForm from './subs/CourseForm';
import styles from './CreateCourse.module.scss';

const CreateCourse = () => {
  return (
    <>
      <Div className="m-b-temp-7">
        <TopBar />
      </Div>
      <Div>
        <CourseForm />
      </Div>
    </>
  );
};

export default CreateCourse;
