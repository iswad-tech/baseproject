import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import AllBlogs from './subs/AllBlogs';
import TopBar from './subs/TopBar';
import styles from './Blogs.module.scss';

const Blogs = () => {
  return (
    <>
      <Div className="m-b-temp-7">
        <TopBar />
      </Div>
      <AllBlogs />
    </>
  );
};

export default Blogs;
