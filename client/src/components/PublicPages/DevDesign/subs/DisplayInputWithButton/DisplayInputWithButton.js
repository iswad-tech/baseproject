import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Surface from '@/baseComponents/Surface';
import InputWithButton from '@/baseComponents/InputWithButton';

import {
  SURFACE_COLOR_TYPES,
  BORDER_COLOR_TYPES,
  BORDER_RADIUS_TYPES,
  TEXT_COLOR_TYPES,
  TEXT_SIZE_TYPES,
  TEXT_FONT_TYPES,
  SPACINGS
} from '@/constants/devDesignVars';

import styles from './DisplayInputWithButton.module.scss';

const DisplayInputWithButton = () => {
  const [email, setEmail] = useState('');
  return (
    <>
      <Div className="bgBrand p5">
        <InputWithButton
          val={email}
          setVal={setEmail}
          placeHolder="Email"
          name="tempPage"
          id="2"
          btnText="Notify"
        />
      </Div>
    </>
  );
};

export default DisplayInputWithButton;
