import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import AppImage from '@/baseComponents/ReusableComps/AppImage';
import List from '@/baseComponents/ReusableComps/List';
import PngIcon from '@/baseComponents/ReusableComps/PngIcon';

import styles from '../Card.module.scss';

const HomeService = ({ src, title, description, icon, imgAlt = 'ISWAD' }) => {
  return (
    <>
      <Div className="width-per-100 bg-white br-rad-3xl of-hidden box-shadow-type-one br-all-solid-2 br-theme-two height-px-900">
        <AppImage src={src} heightOverWidthAsprctRatio={0.7} alt={imgAlt} />
        <Div className="p-all-temp-7">
          <Div type="flex" vAlign="center">
            <Div
              type="flex"
              hAlign="center"
              vAlign="center"
              className="width-px-20 height-px-20 m-r-8">
              <PngIcon type={icon} />
            </Div>
            <Heading type={5} className="text-black m-y-temp-7 one-line">
              {title}
            </Heading>
          </Div>

          <Div>
            <List list={description} />
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default HomeService;
