import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import { QUALITIES } from '../../constants';
import styles from './Qualities.module.scss';

const Qualities = () => {
  return (
    <>
      <Div className="global-bg-grad-one p-all-temp-10">
        <Heading type={3} className="p-all-temp-10">
          Our Qualities
        </Heading>
        <Div className={cx('global-container', styles.container)}>
          {QUALITIES?.map((item, idx) => (
            <Div key={idx} className="width-per-100">
              <Card
                type={CARD_TYPES.aboutQuality}
                title={item?.title}
                description={item?.description}
                iconType={item?.iconType}
              />
            </Div>
          ))}
        </Div>
      </Div>
    </>
  );
};

export default Qualities;
