import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import Surface from '@/baseComponents/Surface';
import List from '@/baseComponents/List';

import {
  SURFACE_COLOR_TYPES,
  BORDER_COLOR_TYPES,
  BORDER_RADIUS_TYPES,
  TEXT_COLOR_TYPES,
  TEXT_SIZE_TYPES,
  TEXT_FONT_TYPES,
  SPACINGS
} from '@/constants/devDesignVars';

import styles from '../Card.module.scss';

const TemporaryServiceCard = ({ title, explanations }) => {
  return (
    <>
      <Surface
        bgColor={SURFACE_COLOR_TYPES.gradient1}
        textColorType={TEXT_COLOR_TYPES.primary}
        paddings={{ all: SPACINGS[4] }}
        className="br-rad-px-30 w-per-100">
        <Heading type={4} className="height-px-150">
          {title}
        </Heading>
        <Div className="mTXL">
          <List type={1} list={explanations} />
        </Div>
      </Surface>
    </>
  );
};

export default TemporaryServiceCard;
