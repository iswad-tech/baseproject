import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import AppImage from '@/baseComponents/ReusableComps/AppImage';
import Button from '@/baseComponents/ReusableComps/Button';

import styles from '../Card.module.scss';

const CaseStudy = ({ title = '', src = '' }) => {
  return (
    <>
      <Div className="width-per-100 bg-white br-rad-3xl of-hidden p-all-temp-7">
        <Heading type={4} className="text-black m-b-temp-7">
          {title}
        </Heading>
        <Div className="br-rad-3xl of-hidden m-b-temp-7">
          <AppImage src={src} />
        </Div>
        <Div>
          <Button>View</Button>
        </Div>
      </Div>
    </>
  );
};

export default CaseStudy;
