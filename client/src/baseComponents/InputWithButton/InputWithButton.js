import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Surface from '@/baseComponents/Surface';
import TextBox from '@/baseComponents/TextBox';
import Button from '@/baseComponents/Button';

import {
  SURFACE_COLOR_TYPES,
  BORDER_COLOR_TYPES,
  BORDER_RADIUS_TYPES,
  TEXT_COLOR_TYPES,
  TEXT_SIZE_TYPES,
  TEXT_FONT_TYPES,
  SPACINGS
} from '@/constants/devDesignVars';

import styles from './InputWithButton.module.scss';

const InputWithButton = ({ val, setVal, placeHolder, name, id, btnText }) => {
  return (
    <>
      <Surface
        brRadiusType={BORDER_RADIUS_TYPES.xxl}
        paddings={{ all: SPACINGS[4] }}
        style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
        className="w-per-100">
        <Surface type="flex" brRadiusType={BORDER_RADIUS_TYPES.rounded} className="bgWhite p1">
          <TextBox
            type="text"
            val={val}
            placeholder={placeHolder}
            setVal={setVal}
            name={name}
            id={id}
            hasBorder={false}
            hasMarginBottom={false}
            className="w-per-100"
          />
          <Surface>
            <Button className="w-px-150"> {btnText}</Button>
          </Surface>
        </Surface>
      </Surface>
    </>
  );
};

export default InputWithButton;
