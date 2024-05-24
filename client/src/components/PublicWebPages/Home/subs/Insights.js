import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import { INSIGHTS } from '../constants';
import styles from '../Home.module.scss';
import { CARD_TYPES } from '@/constants/devDesignVars';

const Insights = () => {
  return (
    <>
      <Div type="flex" hAlign="center" className="width-per-100 flex--wrap">
        {INSIGHTS?.map((item, idx) => (
          <Div key={idx} className="width-px-300 m-b-16 m-r-16 br-rad-px-10 of-hidden">
            <Card type={CARD_TYPES.homeInsight} src={item?.src} title={item?.title} />
          </Div>
        ))}
      </Div>
    </>
  );
};

export default Insights;
