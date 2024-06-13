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
        {type === 'facebook' && <AppImage src={FacebookIcon} />}
        {type === 'instagram' && <AppImage src={InstagramIcon} />}
        {type === 'linkedIn' && <AppImage src={LinkedInIcon} />}
        {type === 'gear' && <AppImage src={GearIcon} />}
        {type === 'laptop' && <AppImage src={LaptopIcon} />}
        {type === 'people' && <AppImage src={PeopleIcon} />}
        {type === 'bracket' && <AppImage src={BracketIcon} />}
        {type === 'cup' && <AppImage src={CupIcon} />}
        {type === 'Unique1' && <AppImage src={Unique1} />}
        {type === 'Unique2' && <AppImage src={Unique2} />}
        {type === 'Unique3' && <AppImage src={Unique3} />}
        {type === 'Unique4' && <AppImage src={Unique4} />}
        {type === 'Quality1' && <AppImage src={Quality1} />}
        {type === 'Quality2' && <AppImage src={Quality2} />}
        {type === 'Quality3' && <AppImage src={Quality3} />}
        {type === 'Quality4' && <AppImage src={Quality4} />}
      </Div>
    </>
  );
};

export default PngIcon;
