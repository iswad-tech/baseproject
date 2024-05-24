import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import AppImage from '@/baseComponents/AppImage';
import Paragraph from '@/baseComponents/Paragraph';
import Button from '@/baseComponents/Button';
import DivWidthDynamic from '@/baseComponents/DivWidthDynamic';

import landing from '@/images/js-Images/general/HomePage/Landing.png';

import styles from '../Home.module.scss';

const Landing = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  return (
    <>
      <Div className="pos-rel width-per-100">
        <Div className="width-per-100">
          <AppImage src={landing} heightOverWidthAsprctRatio={669 / 1440} />
        </Div>

        <DivWidthDynamic
          setContainerWidth={setContainerWidth}
          className="pos-abs pos-abs--lt z-10 width-per-100">
          {containerWidth >= 1400 ? (
            <Div
              className="global-container"
              style={{
                marginLeft: (350 * containerWidth) / 1500,
                marginTop: '32px'
              }}>
              <Heading type={1} className="text-theme-one max-width-px-350">
                Empower Your Vision By ISWAD Today!
              </Heading>
              <Paragraph className="max-width-px-350 m-t-16">
                At ISWAD, we deliver bespoke software and AI solutions that revolutionize
                industries. Empower your business to exceed expectations and set new standards with
                us.
              </Paragraph>
              <Div type="flex" className="m-t-32">
                <Button className="width-px-300">Start Your Project</Button>
              </Div>
            </Div>
          ) : (
            ''
          )}

          {containerWidth >= 1200 && containerWidth < 1400 ? (
            <Div
              className="global-container"
              style={{
                marginLeft: (350 * containerWidth) / 1500,
                marginTop: '100px'
              }}>
              <Heading type={1} className="text-theme-one max-width-px-350">
                Empower Your Vision By ISWAD Today!
              </Heading>
              {/* <Paragraph className="max-width-px-350 m-t-16">
                At ISWAD, we deliver bespoke software and AI solutions that revolutionize
                industries. Empower your business to exceed expectations and set new standards with
                us.
              </Paragraph> */}
              <Div type="flex" className="m-t-32">
                <Button className="width-px-300">Start Your Project</Button>
              </Div>
            </Div>
          ) : (
            ''
          )}

          {containerWidth >= 1000 && containerWidth < 1200 ? (
            <Div
              className="global-container"
              style={{
                marginLeft: (250 * containerWidth) / 1500,
                marginTop: '100px'
              }}>
              <Heading type={1} className="text-theme-one max-width-px-350">
                Empower Your Vision By ISWAD Today!
              </Heading>
              {/* <Paragraph className="max-width-px-350 m-t-16">
                At ISWAD, we deliver bespoke software and AI solutions that revolutionize
                industries. Empower your business to exceed expectations and set new standards with
                us.
              </Paragraph> */}
              <Div type="flex" className="m-t-32">
                <Button className="width-px-300">Start Your Project</Button>
              </Div>
            </Div>
          ) : (
            ''
          )}

          {containerWidth >= 800 && containerWidth < 1000 ? (
            <Div
              className="global-container"
              style={{
                marginLeft: (250 * containerWidth) / 1500,
                marginTop: '16px'
              }}>
              <Heading type={1} className="text-theme-one max-width-px-300">
                Empower Your Vision By ISWAD Today!
              </Heading>
              {/* <Paragraph className="max-width-px-350 m-t-16">
                At ISWAD, we deliver bespoke software and AI solutions that revolutionize
                industries. Empower your business to exceed expectations and set new standards with
                us.
              </Paragraph> */}
              <Div type="flex" className="m-t-32">
                <Button className="width-px-250">Start Your Project</Button>
              </Div>
            </Div>
          ) : (
            ''
          )}

          {containerWidth >= 600 && containerWidth < 800 ? (
            <Div
              className="global-container"
              style={{
                marginLeft: (250 * containerWidth) / 1500,
                marginTop: '16px'
              }}>
              <Heading type={3} className="text-theme-one max-width-px-200">
                Empower Your Vision By ISWAD Today!
              </Heading>
              {/* <Paragraph className="max-width-px-350 m-t-16">
                At ISWAD, we deliver bespoke software and AI solutions that revolutionize
                industries. Empower your business to exceed expectations and set new standards with
                us.
              </Paragraph> */}
              <Div type="flex" className="m-t-16">
                <Button className="width-px-200 f-s-px-14">Start Your Project</Button>
              </Div>
            </Div>
          ) : (
            ''
          )}

          {containerWidth >= 250 && containerWidth < 600 ? (
            <Div
              className="global-container"
              style={{
                marginLeft: (50 * containerWidth) / 1500,
                marginTop: '54px'
              }}>
              <Heading type={6} className="text-theme-one max-width-px-200 text-underline">
                Empower Your Vision By ISWAD Today!
              </Heading>
              {/* <Paragraph className="max-width-px-350 m-t-16">
                At ISWAD, we deliver bespoke software and AI solutions that revolutionize
                industries. Empower your business to exceed expectations and set new standards with
                us.
              </Paragraph> */}
              {/* <Div type="flex" className="m-t-32">
                <Button className="width-px-250">Start Your Project</Button>
              </Div> */}
            </Div>
          ) : (
            ''
          )}
        </DivWidthDynamic>
      </Div>
    </>
  );
};

export default Landing;
