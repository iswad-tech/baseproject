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
      <DivWidthDynamic setContainerWidth={setContainerWidth} className="width-per-100">
        <DivMinFullHeight
          divHeightIsConst
          withoutFooter
          type="flex"
          hAlign="center"
          className={cx('text-white of-hidden pos-rel width-per-100')}>
          <AppImage src={src} width={containerWidth} alt={imgAlt} />
          <Div
            type="flex"
            hAlign="center"
            className={cx(
              'width-per-100 pos-abs pos-abs--lt height-per-100 text-white p-y-temp-14 p-x-temp-7',
              styles.container
            )}>
            <Div
              type="flex"
              hAlign="center"
              vAlign="center"
              direction="vertical"
              className="max-width-px-700 width-per-100">
              <Heading className="text-theme-one text-center">{title}</Heading>
              <Paragraph className="text-center m-y-temp-7">{description}</Paragraph>
              <Div className="width-px-250">
                <Button
                  className="height-px-50 f-b f-s-px-18"
                  onClick={() => contactRef?.current?.scrollIntoView(AUTO_SCROLL_BEHAVIOR)}>
                  Contact Us
                </Button>
              </Div>
            </Div>
          </Div>
        </DivMinFullHeight>
      </DivWidthDynamic>
    </>
  );
};

export default Hero;
