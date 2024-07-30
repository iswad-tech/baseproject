import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import DivWidthDynamic from '@/baseComponents/ReusableComps/DivWidthDynamic';
import AppImage from '@/baseComponents/ReusableComps/AppImage';

import styles from './Hero.module.scss';

const Hero = ({ src, title, imgAlt = '' }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  return (
    <>
      <Div className="width-per-100 pos-rel" style={{ height: '560px' }}>
        <DivWidthDynamic
          setContainerWidth={setContainerWidth}
          className={cx('global-container', containerWidth > 800 ? 'p-all-30' : '')}>
          <AppImage
            src={src}
            height={500}
            width={containerWidth}
            className={cx(containerWidth > 800 ? 'br-rad-3xl' : '')}
            alt={imgAlt}
          />
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className={cx(
              'pos-abs global-font-title f-s-px-28 br-rad-px-20 f-b pos-abs--center height-px-150',
              styles.titleContainer
            )}>
            {title}
          </Div>
        </DivWidthDynamic>
      </Div>
    </>
  );
};

export default Hero;
