import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import AppImage from '@/baseComponents/ReusableComps/AppImage';
import List from '@/baseComponents/ReusableComps/List';

import styles from '../Card.module.scss';

const HomeService = ({ src, title, description }) => {
  return (
    <>
      <Div className="width-per-100 bg-white br-rad-3xl of-hidden box-shadow-type-one br-all-solid-2 br-theme-two">
        <AppImage src={src} heightOverWidthAsprctRatio={0.7} />
        <Div className="p-all-temp-7">
          <Heading type={5} className="text-black m-y-temp-7 one-line">
            {title}
          </Heading>
          <Div>
            <List list={description} />
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default HomeService;
