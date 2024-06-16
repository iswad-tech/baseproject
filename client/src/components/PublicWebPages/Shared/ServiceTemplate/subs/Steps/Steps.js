import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from './Steps.module.scss';

const Steps = ({ steps }) => {
  return (
    <>
      <Heading type={3} className="p-all-temp-10 text-center">
        Steps and Milestones
      </Heading>
      <Div className="p-all-temp-10">
        <Div className={cx('global-container', styles.container)}>
          {steps?.map((item, idx) => (
            <Div key={idx} className="width-per-100">
              <Card
                type={CARD_TYPES.serviceStep}
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

export default Steps;
