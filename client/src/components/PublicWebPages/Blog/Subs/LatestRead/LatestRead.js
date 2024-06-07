import React from 'react';
import cx from 'classnames';
import { Div, Heading, Row, Column } from 'basedesign-iswad';

import Anchor from '@/baseComponents/ReusableComps/Anchor';
import AppImage from '@/baseComponents/ReusableComps/AppImage';

import { ANCHOR_TYPES } from '@/constants/devDesignVars';

import styles from './LatestRead.module.scss';
import Paragraph from '@/baseComponents/ReusableComps/Paragraph';

const LatestRead = () => {
  return (
    <>
      <Div className="">
        <Heading
          type={2}
          className={cx('p-all-temp-7 text-primary m-b-temp-7 global-centralized-in-sm-design')}>
          Latest Read
        </Heading>
        <Row className="global-row-reverse-in-desktop">
          <Column xs={12} sm={12} md={6} lg={6}>
            <Div className="width-per-100 of-hidden global-add-p-x-in-desktop">
              <AppImage
                src={'https://picsum.photos/200'}
                heightOverWidthAsprctRatio={0.7}
                className="global-add-br-rad-in-desktop"
              />
            </Div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6}>
            <Div type="flex" direction="vertical" distributedBetween className="p-x-temp-7">
              <Div>
                <Div className="p-all-temp-7">
                  <Div>John Smith | June 1, 2024</Div>
                  <Heading type={4} className="m-y-temp-7">
                    Title of Blog Post Goes Here.
                  </Heading>
                </Div>
                <Paragraph className="three-lines m-b-temp-7">
                  Description of blog post will go here. Description of blog post will go here.
                  Description of blog post will go here. Description of blog post will go here.
                  Description of blog post will go here. Description of blog post will go here.
                  Description of blog post will go here. Description of blog post will go here.
                  Description of blog post will go here. Description of blog post will go here.
                </Paragraph>
              </Div>
              <Div>
                <Anchor anchorType={ANCHOR_TYPES.tertiary} internal className="f-b" to={'/'}>
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
