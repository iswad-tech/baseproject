import React, { useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import AppImage from '@/baseComponents/ReusableComps/AppImage';

import FacebookIcon from '@/images/js-Images/icons/png/facebook.png';
import InstagramIcon from '@/images/js-Images/icons/png/instagram.png';
import LinkedInIcon from '@/images/js-Images/icons/png/linkedIn.png';
import GearIcon from '@/images/js-Images/icons/png/gear.png';
import CupIcon from '@/images/js-Images/icons/png/cup.png';
import PeopleIcon from '@/images/js-Images/icons/png/people.png';
import BracketIcon from '@/images/js-Images/icons/png/bracket.png';
import LaptopIcon from '@/images/js-Images/icons/png/laptop.png';
import Unique1 from '@/images/js-Images/icons/png/Unique1.png';
import Unique2 from '@/images/js-Images/icons/png/Unique2.png';
import Unique3 from '@/images/js-Images/icons/png/Unique3.png';
import Unique4 from '@/images/js-Images/icons/png/Unique4.png';
import Quality1 from '@/images/js-Images/icons/png/Quality1.png';
import Quality2 from '@/images/js-Images/icons/png/Quality2.png';
import Quality3 from '@/images/js-Images/icons/png/Quality3.png';
import Quality4 from '@/images/js-Images/icons/png/Quality4.png';

import styles from './PngIcon.module.scss';

const PngIcon = ({ type, width = 50, height = 50 }) => {
  return (
    <>
      <Div
        type="flex"
        vAlign="center"
        hAlign="center"
        className="pos-rel of-hidden"
        style={{ width, height }}>
        {type === 'facebook' && <AppImage src={FacebookIcon} alt="Icon ISWAD" />}
        {type === 'instagram' && <AppImage src={InstagramIcon} alt="Icon ISWAD" />}
        {type === 'linkedIn' && <AppImage src={LinkedInIcon} alt="Icon ISWAD" />}
        {type === 'gear' && <AppImage src={GearIcon} alt="Icon ISWAD" />}
        {type === 'laptop' && <AppImage src={LaptopIcon} alt="Icon ISWAD" />}
        {type === 'people' && <AppImage src={PeopleIcon} alt="Icon ISWAD" />}
        {type === 'bracket' && <AppImage src={BracketIcon} alt="Icon ISWAD" />}
        {type === 'cup' && <AppImage src={CupIcon} alt="Icon ISWAD" />}
        {type === 'Unique1' && <AppImage src={Unique1} alt="Icon ISWAD" />}
        {type === 'Unique2' && <AppImage src={Unique2} alt="Icon ISWAD" />}
        {type === 'Unique3' && <AppImage src={Unique3} alt="Icon ISWAD" />}
        {type === 'Unique4' && <AppImage src={Unique4} alt="Icon ISWAD" />}
        {type === 'Quality1' && <AppImage src={Quality1} alt="Icon ISWAD" />}
        {type === 'Quality2' && <AppImage src={Quality2} alt="Icon ISWAD" />}
        {type === 'Quality3' && <AppImage src={Quality3} alt="Icon ISWAD" />}
        {type === 'Quality4' && <AppImage src={Quality4} alt="Icon ISWAD" />}
      </Div>
    </>
  );
};

export default PngIcon;
