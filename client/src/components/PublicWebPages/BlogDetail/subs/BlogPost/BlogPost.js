import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import AppImage from '@/baseComponents/ReusableComps/AppImage';
import DivConvertTextToHtml from '@/baseComponents/ReusableComps/DivConvertTextToHtml';

import moment from '@/utils/moment';
import { DATE_FORMAT } from '@/constants/vars';
import { APP_DOMAIN_FOR_SERVER_SIDE_PROPS } from 'config';

import styles from './BlogPost.module.scss';

const BlogPost = ({ blog }) => {
  return (
    <>
      <Div className="p-all-temp-7 max-width-px-800 m-l-auto m-r-auto">
        <Div className="m-y-temp-14">
          <AppImage
            src={`${APP_DOMAIN_FOR_SERVER_SIDE_PROPS}/${blog?.preview_photo}`}
            heightOverWidthAsprctRatio={0.7}
            className=""
            objectFit="contain"
          />
        </Div>
        <Div className="p-b-temp-7">
          <Div>
            {blog?.writer?.user?.first_name} {blog?.writer?.user?.last_name}|{' '}
            {moment(blog?.created_at).format(DATE_FORMAT)}
          </Div>
          <Heading type={4} className="m-y-temp-7">
            {blog?.title}
          </Heading>
        </Div>

        <Div></Div>
        <DivConvertTextToHtml text={blog?.content} />
      </Div>
    </>
  );
};

export default BlogPost;
