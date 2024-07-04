import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';
import Pagination from '@/baseComponents/ReusableComps/Pagination';

import moment from 'moment-timezone';
import { CARD_TYPES } from '@/constants/devDesignVars';
import { APP_DOMAIN_FOR_SERVER_SIDE_PROPS } from 'config';
import { DATE_FORMAT } from '@/constants/vars';

import styles from './Posts.module.scss';

const Posts = ({ curBlogs, currentPage, setCurrentPage, numberOfPages }) => {
  return (
    <>
      <Div className="global-grid global-grid--cols--auto p-x-temp-7">
        {curBlogs?.map((item, idx) => (
          <Div key={idx} className="width-px-300">
            <Card
              type={CARD_TYPES.blogInfo}
              src={`${APP_DOMAIN_FOR_SERVER_SIDE_PROPS}/${item?.preview_photo}`}
              writer={item?.writer?.user?.first_name}
              postDate={moment(item?.created_at).format(DATE_FORMAT)}
              title={item?.title}
              description={item?.excerpt}
              moreInfoUrl={item?.slug}
            />
          </Div>
        ))}
      </Div>
      <Div type="flex" hAlign="center" className="m-t-temp-14">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          numberOfTotalPages={numberOfPages}
        />
      </Div>
    </>
  );
};

export default Posts;
