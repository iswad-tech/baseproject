import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';

import { BUTTON_TYPES } from '@/constants/devDesignVars';

import styles from '../../DevDesign.module.scss';

const DisplayButton = () => {
  return (
    <>
      {Object?.keys(BUTTON_TYPES)?.map((item, idx) => (
        <Div className="w-px-300 my1">
          <Button btnType={BUTTON_TYPES[item]} />
        </Div>
      ))}
    </>
  );
};

export default DisplayButton;
