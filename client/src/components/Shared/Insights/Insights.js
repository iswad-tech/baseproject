import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import { BLOG_POSTS } from './constants';
import styles from './Insights.module.scss';

const Insights = () => {
  return (
    <>
      <Div className="p-x-temp-7">
        <Heading type={4} className="m-b-temp-14 text-center">
          Interesting Insights
        </Heading>
        <Div type="flex" hAlign="center" className="flex--wrap">
          {BLOG_POSTS?.map((item, idx) => (
            <Div key={idx} className="width-px-300 m-x-temp-7 m-b-temp-7">
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
      </Div>
    </>
  );
};

export default Insights;
