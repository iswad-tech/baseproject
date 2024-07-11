import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Row, Column, Heading } from 'basedesign-iswad';

import AppImage from '@/baseComponents/ReusableComps/AppImage';
import DivWidthDynamic from '@/baseComponents/ReusableComps/DivWidthDynamic';
import Paragraph from '@/baseComponents/ReusableComps/Paragraph';

import Img from '@/images/js-Images/general/AboutPage/ISWAD-About-Us.jpg';

import { ABOUT_ACHIEVEMENTS } from '@/constants/vars';
import styles from './KnowUs.module.scss';

const KnowUs = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  return (
    <>
      <Div className="bg-gray-bright width-per-100 p-t-temp-10">
        <DivWidthDynamic setContainerWidth={setContainerWidth} className="global-container">
          <Heading type={3} className="text-center p-x-temp-7 p-b-temp-10">
            Get To Know Us
          </Heading>
          <Row>
            <Column
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={cx('', containerWidth >= 800 ? 'p-x-temp-7' : '')}>
              <AppImage
                src={Img}
                width={containerWidth}
                className={cx('', containerWidth >= 800 ? 'm-all-temp-7 br-rad-3xl' : '')}
              />
            </Column>
            <Column xs={12} sm={12} md={6} lg={6}>
              <Div className="p-all-temp-7">
                <Paragraph className="m-b-temp-7">
                  Welcome to ISWAD (Intelligent System Web App Development), where we specialize in
                  turning visions into reality through cutting-edge technology and strategic
                  guidance. At ISWAD, we are dedicated to delivering tailored web and mobile app
                  solutions using agile methodologies. Whether you're a startup or an established
                  business, our services are designed to meet your unique needs and propel your
                  growth in the digital landscape. We excel in integrating third-party services
                  seamlessly into our developments, ensuring that our clients can track progress and
                  achieve their business goals efficiently.
                </Paragraph>
                <Paragraph>
                  Our expertise extends beyond conventional development; we leverage data analysis
                  and AI-driven solutions to empower businesses to thrive in today's competitive
                  environment. Our target audience includes small to medium-sized businesses and
                  startups looking for cost-effective and efficient development solutions. At ISWAD,
                  we're committed to your success, providing the technological backbone that
                  transforms challenges into opportunities.
                </Paragraph>
              </Div>
            </Column>
          </Row>

          <Div
            type="flex"
            distributedBetween
            className="flex--wrap width-per-100 max-width-px-700 m-l-auto m-r-auto p-y-temp-10">
            {ABOUT_ACHIEVEMENTS?.map((item, idx) => (
              <Div key={idx} className="m-all-temp-7">
                <Div className="f-s-large f-b">{item?.value}</Div>
                <Div className="f-s-small">{item?.label}</Div>
              </Div>
            ))}
          </Div>
        </DivWidthDynamic>
      </Div>
    </>
  );
};

export default KnowUs;
