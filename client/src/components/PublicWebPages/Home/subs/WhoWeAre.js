import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import AppImage from '@/baseComponents/AppImage';
import DivWidthDynamic from '@/baseComponents/DivWidthDynamic';

import whoWeAre from '@/images/js-Images/general/HomePage/WhoWeAre.png';

import styles from '../Home.module.scss';
import Paragraph from '@/baseComponents/Paragraph';

const WhoWeAre = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  return (
    <>
      <DivWidthDynamic
        setContainerWidth={setContainerWidth}
        type="flex"
        direction={containerWidth >= 800 ? 'horizontal' : 'vertical'}
        vAlign="center"
        hAlign="center"
        className="width-per-100">
        <Div
          className={cx(
            'max-width-px-700 box-shadow-type-one',
            containerWidth >= 800 ? 'width-per-50' : 'width-per-100'
          )}>
          <AppImage src={whoWeAre} objectFit="contain" heightOverWidthAsprctRatio={490 / 716} />
        </Div>
        <Div
          className={cx(
            'max-width-px-700 z-10',
            containerWidth >= 800 ? 'width-per-50' : 'width-per-100'
          )}
          style={{ marginLeft: containerWidth >= 800 ? '-32px' : '0' }}>
          <Div
            className={cx(
              'box-shadow-type-one bg-theme-three p-all-16',
              containerWidth >= 800 && 'br-rad-px-10'
            )}>
            <Div className="f-b text-theme-one f-s-px-32 m-b-32 text-center">Who We Are?</Div>
            <Paragraph>
              At ISWAD (Intelligent System Web App Development), we're dedicated to transforming
              visions into reality. Founded in 2021 by Mohammad Mahdi Mohajer, we provide
              cutting-edge technology and strategic guidance to empower both startups and
              established businesses. Our mission is to deliver bespoke software solutions that
              exceed expectations and set new standards in the industry. We are particularly
              committed to pioneering AI solutions in healthcare, aiming to revolutionize patient
              care, diagnosis, and treatment with innovative technology.
            </Paragraph>
          </Div>
        </Div>
      </DivWidthDynamic>
    </>
  );
};

export default WhoWeAre;
