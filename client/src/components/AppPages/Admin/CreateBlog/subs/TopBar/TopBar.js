import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Back from '@/baseComponents/ReusableComps/Back';

import styles from './TopBar.module.scss';

const TopBar = () => {
  return (
    <>
      <Div type="flex" hAlign="end" vAlign="center">
        <Back />
      </Div>
    </>
  );
};

export default TopBar;
