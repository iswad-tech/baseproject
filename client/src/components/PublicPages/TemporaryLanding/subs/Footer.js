import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Surface from '@/baseComponents/Surface';
import InputWithButton from '@/baseComponents/InputWithButton';
import Icon from '@/baseComponents/Icon';
import Anchor from '@/baseComponents/Anchor';

import { COLORS } from '@/constants/vars';
import {
  SURFACE_COLOR_TYPES,
  BORDER_COLOR_TYPES,
  BORDER_RADIUS_TYPES,
  TEXT_COLOR_TYPES,
  TEXT_SIZE_TYPES,
  TEXT_FONT_TYPES,
  SPACINGS
} from '@/constants/devDesignVars';

import styles from '../TemporaryLanding.module.scss';

const Footer = () => {
  return (
    <>
      <Div type="flex" direction="vertical" className="bgThemeSix p2">
        <Div className="text-center textWhite mb2">Find Us Here</Div>
        <Div type="flex" hAlign="center">
          <Div className="w-px-30 height-px-30 mr1 mouse-hand">
            <Anchor to={'https://www.instagram.com/iswad.tech/'}>
              <Icon type="instagram" color={COLORS.primary} scale={2} />
            </Anchor>
          </Div>
          <Div className="w-px-30 height-px-30 mr1 mouse-hand">
            <Anchor to={'https://ca.linkedin.com/company/iswadtech'}>
              <Icon type="linkedin" color={COLORS.primary} scale={2} />
            </Anchor>
          </Div>
          <Div className="w-px-30 height-px-30 mr1 mouse-hand">
            <Anchor>
              <Icon type="facebook" color={COLORS.primary} scale={2} />
            </Anchor>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Footer;
