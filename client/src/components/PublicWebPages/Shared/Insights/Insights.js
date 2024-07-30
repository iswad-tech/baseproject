import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';

import moment from '@/utils/moment';
import { CARD_TYPES } from '@/constants/devDesignVars';
import { APP_DOMAIN_FOR_SERVER_SIDE_PROPS } from 'config';
import { DATE_FORMAT } from '@/constants/vars';

import { BLOG_POSTS } from './constants';
import styles from './Insights.module.scss';

const Insights = ({ popularBlogs }) => {
  return (
    <>
      <Div className="p-x-temp-7 p-b-temp-10">
        <Div className="w-per-100">
          <Heading type={4} className="p-y-temp-10 text-center">
            Interesting Insights
          </Heading>
        </Div>

        <Div type="flex" hAlign="center" className="flex--wrap">
          {popularBlogs?.map((item, idx) => (
            <Div key={idx} className="width-px-300 m-x-temp-7 m-b-temp-7">
              <Card
                type={CARD_TYPES.blogInfo}
                src={`${APP_DOMAIN_FOR_SERVER_SIDE_PROPS}${item?.preview_photo}`}
                imgAlt={item?.img_alt || 'ISWAS Blog'}
                writer={item?.writer?.user?.first_name}
                postDate={moment(item?.created_at).format(DATE_FORMAT)}
                title={item?.title}
                description={item?.excerpt}
                moreInfoUrl={item?.slug}
              />
            </Div>
          ))}
        </Div>
      </Div>
    </>
  );
};

export default Insights;
