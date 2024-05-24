import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from '../../../DevDesign.module.scss';

const HomeInsightCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="m-b-32 width-px-350"
        {...props}>
        <Div className="m-b-8">Type: {CARD_TYPES.homeInsight}</Div>
        <Card
          type={CARD_TYPES.homeInsight}
          src={'https://picsum.photos/300/300'}
          title="WatSPEED launches new AI program to transform Canadian health care"
        />
      </Div>
    </>
  );
};

export default HomeInsightCard;
