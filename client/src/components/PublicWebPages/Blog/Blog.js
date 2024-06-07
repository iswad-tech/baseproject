import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import LatestRead from './subs/LatestRead/LatestRead';
import StayInTheLoop from './subs/StayInTheLoop/StayInTheLoop';
import FilterBlog from './subs/FilterBlog/FilterBlog';
import Posts from './subs/Posts';
import styles from './Blog.module.scss';

const Blog = () => {
  return (
    <>
      <Div>
        <Div className="m-y-100 global-container add-p-x-in-desktop">
          <LatestRead />
        </Div>
        <Div className="">
          <StayInTheLoop />
        </Div>
        <Div className="global-container">
          <FilterBlog />
        </Div>
        <Div className="global-container add-p-x-in-desktop m-y-100">
          <Posts />
        </Div>
      </Div>
    </>
  );
};

export default Blog;
