import React, { useState } from 'react';
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
import Icon from '@/baseComponents/Icon';

const TemporaryServiceCard = ({ title, explanations, describtion }) => {
  const [isBack, setIsBack] = useState(true);
  return (
    <>
      <Surface
        type="flex"
        direction="vertical"
        distributedBetween
        bgColor={isBack ? 'white' : SURFACE_COLOR_TYPES.gradient1}
        textColorType={TEXT_COLOR_TYPES.primary}
        paddings={{ all: SPACINGS[4] }}
        className="br-rad-px-30 height-px-350 w-per-100 boxShadowType2 mb8">
        <Div>
          {isBack ? (
            ''
          ) : (
            <Heading type={4} className="height-px-150">
              {title}
            </Heading>
          )}
          {isBack ? (
            <Div className="mTXL">
              <List type={1} list={explanations} />
            </Div>
          ) : (
            <Div>{describtion}</Div>
          )}
        </Div>

        <Div type="flex" hAlign="end" vAlign="end" className="w-per-100">
          <Div className="" onClick={() => setIsBack(!isBack)}>
            <Icon type={isBack ? 'minus-circle' : 'plus-circle'} scale={1.2} />
          </Div>
        </Div>
      </Surface>
    </>
  );
};

export default TemporaryServiceCard;
