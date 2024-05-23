import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Div } from 'basedesign-iswad';

import AppImage from '@/baseComponents/AppImage/AppImage';

import { setActiveMenu } from '@/reducers/general/activeMenu';
import { setActiveSubMenu } from '@/reducers/general/activeSubMenu';

import Logo from '@/images/js-Images/general/Header/WideLogo.png';

import DesktopNav from './DesktopNav';
import styles from '../../Header.module.scss';
import Button from '@/baseComponents/Button';

const DesktopHeader = ({ changesThePage, isAppPage }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <Div
        className="mouse-hand"
        onClick={() => {
          dispatch(setActiveMenu('/home'));
          dispatch(setActiveSubMenu(''));
          if (changesThePage) {
            router.push('/');
          } else {
            window.scrollTo(0, 0);
          }
        }}>
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className={cx('pos-rel height-header width-px-100')}>
          <AppImage src={Logo} objectFit="contain" width={100} />
        </Div>
      </Div>
      <Div type="flex" vAlign="center" className="m-l-32">
        <DesktopNav changesThePage={changesThePage} isAppPage={isAppPage} />
        <Div className="width-px-250">
          <Button>Book a Meeting</Button>
        </Div>
      </Div>
    </>
  );
};

export default DesktopHeader;
