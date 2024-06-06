import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import LatestRead from './Subs/LatestRead/LatestRead';
import StayInTheLoop from './Subs/StayInTheLoop/StayInTheLoop';
import BlogPostInformation from './Subs/BlogPostInformation/BlogPostInformation';
import styles from './Blog.module.scss';

const Blog = () => {
  return (
    <>
      <Div>
        <Div className="m-y-100 global-container p-x-temp-7">
          <LatestRead />
        </Div>
        <Div className="m-y-100 m-t-100 global-container p-x-temp-7">
          <BlogPostInformation />
        </Div>
        <Div className="m-t-100">
          <StayInTheLoop />
        </Div>
      </Div>
    </>
  );
};

export default Blog;
