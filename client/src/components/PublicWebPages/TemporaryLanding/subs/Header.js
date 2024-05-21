import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import Paragraph from '@/baseComponents/Paragraph';
import InputWithButton from '@/baseComponents/InputWithButton';
import AppImage from '@/baseComponents/AppImage';

import logo from '@/images/js-Images/general/Header/Header-Logo.png';

import styles from '../TemporaryLanding.module.scss';

const Header = () => {
  const [email, setEmail] = useState('');

  return (
    <>
      <Div
        type="flex"
        hAlign="center"
        vAlign="center"
        direction="vertical"
        className="w-per-100 global-bg-grad-one p-x-20 p-y-48 pos-rel">
        <Heading type={1} className="text-white m-b-48 max-width-700">
          We’re Coming Soon
        </Heading>
        <Paragraph isCentralized className="text-black m-b-48 max-width-px-700">
          Our website is currently undergoing exciting renovations to enhance your browsing
          experience. In the meantime, feel free to reach out to us via email at info@iswad.tech for
          any inquiries or assistance. Thank you for visiting, and we look forward to unveiling our
          revamped site soon!
        </Paragraph>
        <Div className="width-per-100 max-width-px-700">
          <InputWithButton
            val={email}
            setVal={setEmail}
            placeHolder="Email"
            name="email"
            id="temp-page-email"
            btnText="Notify Me"
          />
        </Div>
        <Div className={cx('width-px-350 pos-abs', styles.headerLogo)}>
          <AppImage src={logo} objectFit="contain" heightOverWidthAsprctRatio={0.3} />
        </Div>
      </Div>
    </>
  );
};

export default Header;
