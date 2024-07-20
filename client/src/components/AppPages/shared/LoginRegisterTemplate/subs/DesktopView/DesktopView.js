import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import AppImage from '@/baseComponents/ReusableComps/AppImage';

import CoverPhoto from '@/images/js-Images/app/LoginPage/cover.jpg';
import Favicon from '@/images/js-Images/app/LoginPage/favicon.png';

import styles from './DesktopView.module.scss';

const DesktopView = ({ children }) => {
  return (
    <>
      <Div type="flex" className="bg-white box-shadow-type-one width-per-100">
        <Div className={cx('width-per-50', styles.imgContainer)} />

        <Div
          type="flex"
          direction="vertical"
          hAlign="center"
          vAlign="start"
          className="width-per-50 p-all-16">
          <Div className="width-px-80 height-px-80">
            <AppImage src={Favicon} width={80} height={80} />
          </Div>
          <Div type="flex" hAlign="center" direction="vertical" className="width-per-100">
            {children}
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default DesktopView;
