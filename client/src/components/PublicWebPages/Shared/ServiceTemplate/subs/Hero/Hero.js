import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import DivMinFullHeight from '@/baseComponents/ReusableComps/DivMinFullHeight';
import DivWidthDynamic from '@/baseComponents/ReusableComps/DivWidthDynamic';
import AppImage from '@/baseComponents/ReusableComps/AppImage';
import Paragraph from '@/baseComponents/ReusableComps/Paragraph';
import Button from '@/baseComponents/ReusableComps/Button';

import { AUTO_SCROLL_BEHAVIOR } from '@/constants/vars';

import styles from './Hero.module.scss';

const Hero = ({ src, title, description, contactRef, imgAlt = 'Services By ISWAD' }) => {
  const [containerWidth, setContainerWidth] = useState(0);

  return (
    <>
      <Div className={cx('width-per-100 of-hidden', styles.container)}>
        <DivWidthDynamic
          setContainerWidth={setContainerWidth}
          type="flex"
          hAlign="center"
          className={cx('text-white of-hidden pos-rel width-per-100', styles.container)}>
          <AppImage src={src} width={containerWidth} alt={imgAlt} />

          <Div className={cx('pos-abs width-per-100 height-per-100', styles.contentContainer)}>
            <Div
              type="flex"
              direction="vertical"
              hAlign="center"
              vAlign="center"
              className={cx(
                'max-width-px-700 m-l-auto m-r-auto height-per-100',
                styles.contentContainerText
              )}>
              <Heading
                type={1}
                className="m-b-temp-7 text-theme-one global-hyphenated width-per-100 text-center height-px-160 of-hidden">
                {title}
              </Heading>
              <Paragraph className="m-b-temp-7 text-center">{description}</Paragraph>
              <Div className="width-px-300">
                <Button
                  className="height-px-50 f-b f-s-px-18"
                  onClick={() => contactRef?.current?.scrollIntoView(AUTO_SCROLL_BEHAVIOR)}>
                  Contact Us
                </Button>
              </Div>
            </Div>
          </Div>
        </DivWidthDynamic>
      </Div>
    </>
  );
};

export default Hero;
