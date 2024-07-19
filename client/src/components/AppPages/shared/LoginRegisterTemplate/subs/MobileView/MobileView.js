import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import AppImage from '@/baseComponents/ReusableComps/AppImage';
import Favicon from '@/images/js-Images/app/LoginPage/favicon.png';

import styles from './MobileView.module.scss';

const MobileView = ({ children }) => {
  return (
    <>
      <Div
        type="flex"
        className={cx('bg-white box-shadow-type-one width-per-100 pos-rel', styles.container)}>
        <Div className={cx('pos-abs pos-abs--lt', styles.overlay)} />
        <Div
          type="flex"
          direction="vertical"
          hAlign="center"
          vAlign="start"
          className="width-per-100 p-all-16 z-10">
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

export default MobileView;
