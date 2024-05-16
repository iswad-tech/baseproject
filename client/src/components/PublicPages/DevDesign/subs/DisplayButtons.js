import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';

import { BUTTON_TYPES } from '@/constants/devDesignVars';

import styles from '../DevDesign.module.scss';

function DisplayColors() {
  return (
    <>
      <Div
        type="flex"
        vAlign="center"
        hAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        {Object.keys(BUTTON_TYPES)?.map((item, idx) => (
          <Div key={idx} className="mr1">
            <Button btnType={BUTTON_TYPES[item]}>Button type {item}</Button>
          </Div>
        ))}
      </Div>
    </>
  );
}

export default DisplayColors;
