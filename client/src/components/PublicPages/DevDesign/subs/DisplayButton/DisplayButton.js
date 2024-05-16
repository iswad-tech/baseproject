import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Surface from '@/baseComponents/Surface';
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

import styles from './DisplayButton.module.scss';

const DisplayButton = () => {
  return (
    <>
      <Button>button</Button>
    </>
  );
};

export default DisplayButton;
