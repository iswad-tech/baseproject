import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';
import InputWithButton from '@/baseComponents/FormComps/InputWithButton';

import styles from './StayInTheLoop.module.scss';
const StayInTheLoop = () => {
  return (
    <>
      <Div className={cx('p-x-temp-7 p-t-temp-7 bg-theme-one', styles.container)}>
        <Heading type={4} className="text-white text-center m-b-temp-7">
          Stay in the Loop
        </Heading>
        <Div className="m-b-temp-7 text-center"> Subscribe to our Blog updates</Div>
        <Div className="width-per-100 max-width-px-700 m-l-auto m-r-auto">
          <InputWithButton btnText="Subscribe" placeHolder="Email" />
        </Div>
      </Div>
    </>
  );
};

export default StayInTheLoop;
