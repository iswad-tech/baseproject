import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from '../../../DevDesign.module.scss';

const HomeAdvantageCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="m-b-32 width-px-350"
        {...props}>
        <Div className="m-b-8">Type: {CARD_TYPES.homeAdvantage}</Div>
        <Card
          type={CARD_TYPES.homeAdvantage}
          title="Scalability and Clean Code"
          explanation={`We prioritize scalable solutions and clean, maintainable code, ensuring seamless integration and support for your company’s growth over time.`}
        />
      </Div>
    </>
  );
};

export default HomeAdvantageCard;
