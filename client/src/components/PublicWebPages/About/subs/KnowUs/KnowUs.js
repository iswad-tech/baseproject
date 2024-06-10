import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Row, Column, Heading } from 'basedesign-iswad';

import AppImage from '@/baseComponents/ReusableComps/AppImage';
import DivWidthDynamic from '@/baseComponents/ReusableComps/DivWidthDynamic';
import Paragraph from '@/baseComponents/ReusableComps/Paragraph';

import { ABOUT_ACHIEVEMENTS } from '@/constants/vars';
import styles from './KnowUs.module.scss';

const KnowUs = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  return (
    <>
      <Div className="bg-gray-bright width-per-100">
        <DivWidthDynamic setContainerWidth={setContainerWidth} className="global-container">
          <Heading type={4} className="text-center p-all-temp-7">
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
                src={'https://picsum.photos/300'}
                width={containerWidth}
                className={cx('', containerWidth >= 800 ? 'm-all-temp-7 br-rad-3xl' : '')}
              />
            </Column>
            <Column xs={12} sm={12} md={6} lg={6}>
              <Div className="p-all-temp-7">
                <Paragraph className="m-b-temp-7">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </Paragraph>
                <Paragraph>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </Paragraph>
              </Div>
            </Column>
          </Row>

          <Div
            type="flex"
            distributedBetween
            className="flex--wrap width-per-100 max-width-px-700 m-l-auto m-r-auto">
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
