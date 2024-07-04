import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import DivMinFullHeight from '@/baseComponents/ReusableComps/DivMinFullHeight';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <>
      <DivMinFullHeight type="flex" hAlign="center" vAlign="center" className="fs-r-2">
        <Div className="p4 bgRed textWhite br-rad-px-10">Page Not Found!</Div>
      </DivMinFullHeight>
    </>
  );
};

export default NotFound;
