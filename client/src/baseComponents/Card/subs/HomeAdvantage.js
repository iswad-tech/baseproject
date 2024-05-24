import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Paragraph from '@/baseComponents/Paragraph';

import styles from '../Card.module.scss';

const HomeAdvantage = ({ title = '', explanation = '' }) => {
  return (
    <>
      <Div className="width-per-100 bg-theme-one text-white p-all-16 br-rad-px-16 height-per-100">
        <Div className="text-center f-b f-title m-b-16 height-px-60">{title}</Div>
        <Paragraph>{explanation}</Paragraph>
      </Div>
    </>
  );
};

export default HomeAdvantage;
