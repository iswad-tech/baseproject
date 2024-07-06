import React from 'react';
import cx from 'classnames';
import { Div, Row, Column } from 'basedesign-iswad';

import TopBar from './subs/TopBar';
import BlogPost from './subs/BlogPost';
import DetailSideBar from './subs/DetailSideBar';
import styles from './BlogDetail.module.scss';

const BlogDetail = ({ blog }) => {
  return (
    <>
      <Div className="global-container">
        <TopBar />
      </Div>
      <Div className="m-b-temp-7 global-container">
        <Row className="global-row-reverse-in-desktop">
          <Column xs={12} sm={12} md={4} lg={4}>
            <Div className="width-per-100 p-x-temp-7">
              <DetailSideBar blog={blog} />
            </Div>
          </Column>
          <Column xs={12} sm={12} md={8} lg={8}>
            <BlogPost blog={blog} />
          </Column>
        </Row>
      </Div>
    </>
  );
};

export default BlogDetail;
