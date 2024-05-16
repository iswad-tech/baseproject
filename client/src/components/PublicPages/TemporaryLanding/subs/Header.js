import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Surface from '@/baseComponents/Surface';

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

const Header = () => {
  return (
    <>
      <Surface
        bgColor={SURFACE_COLOR_TYPES.gradient1}
        paddings={{ x: SPACINGS.md, y: SPACINGS.xxl }}
        type="flex"
        hAlign="center"
        direction="vertical">
        <Surface
          textColorType={TEXT_COLOR_TYPES.secondary}
          textFontType={TEXT_FONT_TYPES.title}
          textSizeType={TEXT_SIZE_TYPES.xxxLarge}
          margins={{ bottom: SPACINGS.xxl }}>
          We're Coming Soon
        </Surface>

        <Surface className="max-w-px-500 text-center">
          Our website is currently undergoing exciting renovations to enhance your browsing
          experience. In the meantime, feel free to reach out to us via email at admin@iswad.tech
          for any inquiries or assistance. Thank you for visiting, and we look forward to unveiling
          our revamped site soon!
        </Surface>
      </Surface>
    </>
  );
};

export default Header;
