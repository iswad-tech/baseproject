import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import Paragraph from '@/baseComponents/ReusableComps/Paragraph';
import AppImage from '@/baseComponents/ReusableComps/AppImage';

import AboutImg from '@/images/js-Images/general/HomePage/About.png';

import { ABOUT_ACHIEVEMENTS } from '../../constants';
import styles from './About.module.scss';

const About = () => {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        className="width-per-100 bg-gray-bright p-x-temp-7 p-y-100">
        <Div className="max-width-px-700">
          <Heading type={3}>Get to Know a Little Bit About Us</Heading>
          <Paragraph className="m-y-temp-7">
            At ISWAD (Intelligent System Web App Development), we're dedicated to transforming
            visions into reality. Here, we provide cutting-edge technology and strategic guidance to
            empower both startups and established businesses.
          </Paragraph>
          <Div>
            <AppImage src={AboutImg} heightOverWidthAsprctRatio={278 / 846} />
          </Div>

          <Div type="flex" distributedBetween className="flex--wrap width-per-100">
            {ABOUT_ACHIEVEMENTS?.map((item, idx) => (
              <Div key={idx} className="m-all-temp-7">
                <Div className="f-s-large f-b">{item?.value}</Div>
                <Div className="f-s-small">{item?.label}</Div>
              </Div>
            ))}
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default About;
