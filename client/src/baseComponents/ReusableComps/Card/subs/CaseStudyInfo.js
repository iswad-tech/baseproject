import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import DivWidthDynamic from '@/baseComponents/ReusableComps/DivWidthDynamic';
import AppImage from '@/baseComponents/ReusableComps/AppImage';
import Button from '@/baseComponents/ReusableComps/Button';

import { BUTTON_TYPES } from '@/constants/devDesignVars';

import styles from '../Card.module.scss';

const CaseStudyInfo = ({ title = '', description = '', src = '' }) => {
  const [containerWidth, setContainerWidth] = useState(0);

  return (
    <>
      <DivWidthDynamic
        setContainerWidth={setContainerWidth}
        type="flex"
        direction={containerWidth < 800 ? 'vertical' : 'horizontal'}
        vAlign={containerWidth < 800 ? 'start' : 'center'}
        className={cx(
          'width-per-100 bg-white br-rad-3xl',
          containerWidth < 800 ? 'p-all-temp-7' : 'p-all-temp-14'
        )}>
        <Div
          className={cx(
            'width-per-100 max-width-px-400 br-rad-3xl of-hidden',
            containerWidth < 800 ? 'm-b-temp-7' : 'm-r-temp-7'
          )}>
          <AppImage src={src} />
        </Div>
        <Div>
          <Heading type={4} className="text-black m-b-temp-7">
            {title}
          </Heading>
          <Div className="m-b-temp-14">{description}</Div>
          <Div type="flex" direction={containerWidth < 800 ? 'vertical' : 'horizontal'}>
            <Div className={cx(containerWidth < 800 ? 'm-b-temp-3' : 'm-r-temp-3')}>
              <Button>Book a Meeting</Button>
            </Div>
            <Div>
              <Button btnType={BUTTON_TYPES.secondary}>Contact Us</Button>
            </Div>
          </Div>
        </Div>
      </DivWidthDynamic>
    </>
  );
};

export default CaseStudyInfo;
