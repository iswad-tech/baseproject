import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import TopBar from './subs/TopBar';
import AllCourses from './subs/AllCourses';
import styles from './Courses.module.scss';

const Courses = () => {
  return (
    <>
      <Div className="m-b-temp-7">
        <TopBar />
      </Div>
      <AllCourses />
    </>
  );
};

export default Courses;
