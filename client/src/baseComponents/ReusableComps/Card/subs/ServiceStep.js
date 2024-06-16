import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import Paragraph from '@/baseComponents/ReusableComps/Paragraph';
import Icon from '@/baseComponents/ReusableComps/Icon';

import styles from '../Card.module.scss';

const ServiceStep = ({ title, description, iconType }) => {
  return (
    <>
      <Div className="bg-white br-rad-3xl box-shadow-type-one p-all-temp-7 min-height-px-200 width-per-100">
        <Div type="flex" hAlign="start" className="">
          <Div className="m-r-temp-7 width-per-100">
            <Heading type={5} className="m-b-temp-7">
              {title}
            </Heading>
            <Paragraph>{description}</Paragraph>
          </Div>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className="m-y-temp-7 width-px-40 height-px-40">
            <Icon type={iconType} scale={2} />
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default ServiceStep;
