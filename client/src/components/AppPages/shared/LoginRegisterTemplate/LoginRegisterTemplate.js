import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import DivMinFullHeight from '@/baseComponents/ReusableComps/DivMinFullHeight';
import DivWidthDynamic from '@/baseComponents/ReusableComps/DivWidthDynamic';

import DesktopView from './subs/DesktopView';
import MobileView from './subs/MobileView';
import styles from './LoginRegisterTemplate.module.scss';

const LoginRegisterTemplate = ({ children }) => {
  const [containerWidth, setContainerWidth] = useState(0);

  return (
    <>
      <DivMinFullHeight
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className="width-per-100 m-l-auto m-r-auto"
        style={{ maxWidth: '1400px' }}>
        <DivWidthDynamic className="width-per-100" setContainerWidth={setContainerWidth}>
          {containerWidth >= 800 ? (
            <Div className="p-all-temp-7">
              <DesktopView>{children}</DesktopView>
            </Div>
          ) : (
            <MobileView>{children}</MobileView>
          )}
        </DivWidthDynamic>
      </DivMinFullHeight>
    </>
  );
};

export default LoginRegisterTemplate;
