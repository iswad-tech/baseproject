import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Heading, Row, Column } from 'basedesign-iswad';

import AppImage from '@/baseComponents/ReusableComps/AppImage';
import DivConvertTextToHtml from '@/baseComponents/ReusableComps/DivConvertTextToHtml';
import DivWidthDynamic from '@/baseComponents/ReusableComps/DivWidthDynamic';

import moment from '@/utils/moment';
import { DATE_FORMAT } from '@/constants/vars';
import { APP_DOMAIN_FOR_SERVER_SIDE_PROPS } from 'config';

import styles from './BlogPost.module.scss';

const BlogPost = ({ blog }) => {
  const [containerWidth, setContainerWidth] = useState(0);

  return (
    <>
      <DivWidthDynamic
        setContainerWidth={setContainerWidth}
        className={cx(
          'width-per-100',
          containerWidth >= 800 ? 'br-right-solid-2 br-gray-dark' : 'm-t-temp-7'
        )}>
        <Div className={cx('max-width-px-800 m-l-auto m-r-auto')}>
          <Div className={cx('m-b-temp-7', containerWidth >= 800 ? 'p-x-temp-7' : '')}>
            <AppImage
              src={`${APP_DOMAIN_FOR_SERVER_SIDE_PROPS}/${blog?.preview_photo}`}
              heightOverWidthAsprctRatio={0.5}
              className={cx(containerWidth >= 800 ? 'br-rad-lg' : '')}
              objectFit="cover"
            />
          </Div>
          <Div className="p-x-temp-7">
            <Div className="p-y-temp-7">
              <Heading type={4} className="">
                {blog?.title}
              </Heading>
            </Div>
            <Div style={{ lineHeight: '40px' }}>
              <DivConvertTextToHtml text={blog?.content} />
            </Div>
          </Div>
        </Div>
      </DivWidthDynamic>
    </>
  );
};

export default BlogPost;
