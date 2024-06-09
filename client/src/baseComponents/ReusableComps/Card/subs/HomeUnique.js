import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import PngIcon from '@/baseComponents/ReusableComps/PngIcon';
import Paragraph from '@/baseComponents/ReusableComps/Paragraph';

import styles from '../Card.module.scss';

const HomeUnique = ({ iconType, title, description }) => {
  return (
    <>
      <Div className="width-per-100 bg-white br-rad-3xl box-shadow-type-one p-all-temp-7 height-px-500">
        <Div>
          <PngIcon type={iconType} />
        </Div>
        <Heading type={5} className="m-y-temp-7 height-px-80 two-lines">
          {title}
        </Heading>
        <Paragraph>{description}</Paragraph>
      </Div>
    </>
  );
};

export default HomeUnique;
