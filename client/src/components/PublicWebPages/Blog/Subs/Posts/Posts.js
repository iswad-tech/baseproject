import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';
import Pagination from '@/baseComponents/ReusableComps/Pagination';

import { CARD_TYPES } from '@/constants/devDesignVars';

import { BLOG_POSTS } from '../../constants';
import styles from './Posts.module.scss';

const Posts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <Div className="global-grid global-grid--cols--auto p-x-temp-7">
        {BLOG_POSTS?.map((item, idx) => (
          <Div key={idx} className="width-px-300 m-x">
            <Card
              type={CARD_TYPES.blogInfo}
              src={item?.src}
              writer={item?.writer}
              postDate={item?.postDate}
              title={item?.title}
              description={item?.description}
              moreInfoUrl={item?.moreInfoUrl}
            />
          </Div>
        ))}
      </Div>
      <Div type="flex" hAlign="center" className="m-t-temp-14">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          numberOfTotalPages={10}
        />
      </Div>
    </>
  );
};

export default Posts;
