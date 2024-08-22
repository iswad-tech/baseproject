import React from 'react';
import cx from 'classnames';
import { Div, Label as BaseLabel } from 'basedesign-iswad';

import styles from './Label.module.scss';

const Label = ({ labelText, isRequired, isSmall = false, className }) => {
  return (
    <>
      <Div className={cx('text-gray-dark m-b-4', isSmall ? 'f-s-small' : 'f-s-regular', className)}>
        <BaseLabel className={cx(isRequired && 'required')}>{labelText}</BaseLabel>
      </Div>
    </>
  );
};

export default Label;
