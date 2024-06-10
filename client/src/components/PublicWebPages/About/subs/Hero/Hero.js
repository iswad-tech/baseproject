import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import DivMinFullHeight from '@/baseComponents/ReusableComps/DivMinFullHeight';
import DivWidthDynamic from '@/baseComponents/ReusableComps/DivWidthDynamic';
import AppImage from '@/baseComponents/ReusableComps/AppImage';
import Paragraph from '@/baseComponents/ReusableComps/Paragraph';
import Button from '@/baseComponents/ReusableComps/Button';

import HeroImg from '@/images/js-Images/general/AboutPage/Hero.png';

import styles from './Hero.module.scss';

const Hero = () => {
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
          <AppImage src={HeroImg} width={containerWidth} />
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
              direction="vertical"
              distributedBetween
              className="max-width-px-700 width-per-100">
              <Heading className="text-theme-one">About Us</Heading>
              <Paragraph className="text-center m-y-temp-7">
                At ISWAD (Intelligent System Web App Development), we're dedicated to transforming
                visions into reality. Here, we provide cutting-edge technology and strategic
                guidance to empower both startups and established businesses.{' '}
              </Paragraph>
              <Div className="width-px-250">
                <Button>Contact Us</Button>
              </Div>
            </Div>
          </Div>
        </DivMinFullHeight>
      </DivWidthDynamic>
    </>
  );
};

export default Hero;
