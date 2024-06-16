import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import DivWidthDynamic from '@/baseComponents/ReusableComps/DivWidthDynamic';
import Card from '@/baseComponents/ReusableComps/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import { UNIQUES } from '../../constants';
import styles from './Unique.module.scss';

const Unique = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  return (
    <>
      <Div
        className={cx(
          'bg-gray-bright width-per-100 p-t-temp-10 p-b-temp-10',
          containerWidth >= 600 ? 'p-x-temp-15' : 'p-x-temp-5'
        )}>
        <Div className="global-container">
          <Heading type={3} className="m-b-temp-15">
            What Makes Us Unique
          </Heading>
          <DivWidthDynamic
            setContainerWidth={setContainerWidth}
            type="flex"
            hAlign="center"
            className="flex--wrap">
            {UNIQUES?.map((item, idx) => (
              <Div
                key={idx}
                className={cx(
                  'width-px-300 m-b-temp-7',
                  containerWidth >= 600 ? 'm-x-temp-4' : ''
                )}>
                <Card
                  type={CARD_TYPES.homeUnique}
                  iconType={item?.icon}
                  title={item?.title}
                  description={item?.description}
                />
              </Div>
            ))}
          </DivWidthDynamic>
        </Div>
      </Div>
    </>
  );
};

export default Unique;
