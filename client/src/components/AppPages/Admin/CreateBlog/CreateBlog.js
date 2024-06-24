import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import TopBar from './subs/TopBar';
import BlogForm from './subs/BlogForm';
import styles from './CreateBlog.module.scss';

const CreateBlog = () => {
  return (
    <>
      <Div className="m-b-temp-7">
        <TopBar />
      </Div>
      <Div>
        <BlogForm />
      </Div>
    </>
  );
};

export default CreateBlog;
