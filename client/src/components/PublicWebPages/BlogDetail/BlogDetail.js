import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import TopBar from './subs/TopBar';
import BlogPost from './subs/BlogPost';
import styles from './BlogDetail.module.scss';

const BlogDetail = ({ blog }) => {
  return (
    <>
      <Div>
        <TopBar />
      </Div>
      <Div>
        <BlogPost blog={blog} />
      </Div>
    </>
  );
};

export default BlogDetail;
