import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import PngIcon from '@/baseComponents/ReusableComps/PngIcon';
import Paragraph from '@/baseComponents/ReusableComps/Paragraph';

import styles from '../Card.module.scss';

const HomeUnique = ({ iconType, title, description }) => {
  return (
    <>
      <Div
        className={cx(
          'width-per-100 bg-white br-rad-3xl box-shadow-type-two p-all-temp-7 height-px-550 bg-theme-one-on-hover transition-type-one',
          styles.uniqueCardContainer
        )}>
        <Div>
          <PngIcon type={iconType} />
        </Div>
        <Div className="m-y-temp-7 f-s-px-20 global-font-title height-px-70 two-lines">{title}</Div>
        <Paragraph className="f-s-px-12">{description}</Paragraph>
      </Div>
    </>
  );
};

export default HomeUnique;
