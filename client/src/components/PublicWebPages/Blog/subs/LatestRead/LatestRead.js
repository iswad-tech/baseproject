import React from 'react';
import cx from 'classnames';
import { Div, Heading, Row, Column } from 'basedesign-iswad';

import Anchor from '@/baseComponents/ReusableComps/Anchor';
import AppImage from '@/baseComponents/ReusableComps/AppImage';

import moment from '@/utils/moment';
import { ANCHOR_TYPES } from '@/constants/devDesignVars';
import { DATE_FORMAT } from '@/constants/vars';
import { APP_DOMAIN_FOR_SERVER_SIDE_PROPS } from 'config';

import styles from './LatestRead.module.scss';
import Paragraph from '@/baseComponents/ReusableComps/Paragraph';

const LatestRead = ({ featuredBlogs }) => {
  return (
    <>
      <Div className="">
        <Heading
          type={2}
          className={cx('p-all-temp-7 text-primary m-b-temp-7 global-centralized-in-sm-design')}>
          Featured Post
        </Heading>
        <Row className="global-row-reverse-in-desktop">
          <Column xs={12} sm={12} md={6} lg={6}>
            <Div className="width-per-100 of-hidden global-add-p-x-in-desktop">
              <AppImage
                src={`${APP_DOMAIN_FOR_SERVER_SIDE_PROPS}/${featuredBlogs?.[0]?.preview_photo}`}
                heightOverWidthAsprctRatio={0.5}
                className="global-add-br-rad-in-desktop"
                alt={featuredBlogs?.[0]?.img_alt || 'ISWAS Blog'}
              />
            </Div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6}>
            <Div type="flex" direction="vertical" distributedBetween className="p-x-temp-7">
              <Div>
                <Div className="p-all-temp-7">
                  <Div>
                    {`${featuredBlogs?.[0]?.writer?.user?.first_name} ${
                      featuredBlogs?.[0]?.writer?.user?.last_name
                    } | ${moment(featuredBlogs?.[0]?.created_at).format(DATE_FORMAT)}`}
                  </Div>
                  <Heading type={4} className="m-y-temp-7">
                    {featuredBlogs?.[0]?.title}
                  </Heading>
                </Div>
                <Paragraph className="m-b-temp-7">{featuredBlogs?.[0]?.excerpt}</Paragraph>
              </Div>
              <Div>
                <Anchor
                  anchorType={ANCHOR_TYPES.tertiary}
                  internal
                  className="f-b"
                  to={`blog/${featuredBlogs?.[0]?.slug}`}>
                  Read More
                </Anchor>
              </Div>
            </Div>
          </Column>
        </Row>
      </Div>
    </>
  );
};

export default LatestRead;
