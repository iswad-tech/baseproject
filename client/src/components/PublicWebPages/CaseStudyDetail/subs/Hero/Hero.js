import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import AppImage from '@/baseComponents/ReusableComps/AppImage';

import styles from './Hero.module.scss';

const Hero = ({ src }) => {
  return (
    <>
      <Div className="global-container p-all-temp-7">
        <AppImage src={src} height={500} className="br-rad-3xl" />
      </Div>
    </>
  );
};

export default Hero;
