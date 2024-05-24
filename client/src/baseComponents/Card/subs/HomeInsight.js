import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import AppImage from '@/baseComponents/AppImage';
import DivWidthDynamic from '@/baseComponents/DivWidthDynamic';

import styles from '../Card.module.scss';

const HomeInsight = ({ src = '', title = '' }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  return (
    <>
      <DivWidthDynamic setContainerWidth={setContainerWidth} className="pos-rel">
        <AppImage src={src} width={containerWidth} height={containerWidth} />
        <Div
          type="flex"
          vAlign="end"
          className="pos-abs pos-abs--lt height-per-100 z-10 p-all-16 text-white f-title f-b">
          {title}
        </Div>
      </DivWidthDynamic>
    </>
  );
};

export default HomeInsight;
