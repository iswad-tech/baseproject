import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import { UNIQUES } from '../../constants';
import styles from './Unique.module.scss';

const Unique = () => {
  return (
    <>
      <Div className="bg-gray-bright width-per-100 p-x-temp-15 p-t-temp-10 p-b-temp-10">
        <Div className="global-container">
          <Heading type={3} className="m-b-temp-10">
            What Makes Us Unique
          </Heading>
          <Div type="flex" hAlign="center" className="flex--wrap">
            {UNIQUES?.map((item, idx) => (
              <Div key={idx} className="width-px-300 m-b-temp-7 m-x-temp-4">
                <Card
                  type={CARD_TYPES.homeUnique}
                  iconType={item?.icon}
                  title={item?.title}
                  description={item?.description}
                />
              </Div>
            ))}
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Unique;
