import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import PngIcon from '@/baseComponents/ReusableComps/PngIcon';
import Paragraph from '@/baseComponents/ReusableComps/Paragraph';

import styles from '../Card.module.scss';

const AboutQulity = ({ title, description, iconType }) => {
  return (
    <>
      <Div className="bg-white br-rad-3xl box-shadow-type-one p-all-temp-7 height-px-200">
        <Div type="flex" hAlign="start" className="">
          <Div className="m-r-temp-7">
            <Heading type={5} className="m-b-temp-7">
              {title}
            </Heading>
            <Paragraph>{description}</Paragraph>
          </Div>
          <Div className="m-y-temp-7">
            <PngIcon type={iconType} />
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default AboutQulity;
