import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import AppImage from '@/baseComponents/ReusableComps/AppImage';

import styles from './Hero.module.scss';

const Hero = ({ src, title }) => {
  return (
    <>
      <Div className="global-container p-all-temp-7 pos-rel">
        <AppImage src={src} height={500} className="br-rad-3xl" />
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className={cx(
            'pos-abs global-font-title f-s-px-28 br-rad-px-20 f-b pos-abs--center p-all-temp-5 height-px-100',
            styles.titleContainer
          )}>
          {title}
        </Div>
      </Div>
    </>
  );
};

export default Hero;
