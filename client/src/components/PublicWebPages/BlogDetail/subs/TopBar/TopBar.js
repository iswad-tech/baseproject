import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Back from '@/baseComponents/ReusableComps/Back';

import styles from './TopBar.module.scss';

const TopBar = () => {
  return (
    <>
      <Div type="flex" vAlign="center" hAlign="end" className="width-per-100">
        <Div className="bg-red">
          <Back />
        </Div>
      </Div>
    </>
  );
};

export default TopBar;
