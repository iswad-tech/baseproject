import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import DivWidthDynamic from '@/baseComponents/ReusableComps/DivWidthDynamic';
import Button from '@/baseComponents/ReusableComps/Button';

import { AUTO_SCROLL_BEHAVIOR } from '@/constants/vars';

import DesktopView from './subs/DesktopView';
import MobileView from './subs/MobileView';
import styles from './Services.module.scss';

const Services = ({ contactRef }) => {
  const [containerWidth, setContainerWidth] = useState(0);

  return (
    <>
      <Div type="flex" direction="vertical" hAlign="center" className="">
        <Heading type={3} className="text-center p-t-temp-10">
          Services for All Your Ideas{' '}
        </Heading>
        <Div className="text-center m-y-temp-7">We offer expert services to help you succeed.</Div>
        <Div className="p-b-temp-10">
          <Button onClick={() => contactRef?.current?.scrollIntoView(AUTO_SCROLL_BEHAVIOR)}>
            Contact Us
          </Button>
        </Div>
      </Div>
      <DivWidthDynamic setContainerWidth={setContainerWidth} className="with-per-100 p-b-temp-10">
        {containerWidth > 1200 ? (
          <DesktopView />
        ) : (
          <Div className="m-t-temp-7">
            <MobileView />
          </Div>
        )}
      </DivWidthDynamic>
    </>
  );
};

export default Services;
