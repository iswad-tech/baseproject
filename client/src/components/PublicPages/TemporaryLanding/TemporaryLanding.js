import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Header from './subs/Header';
import Services from './subs/Services';
import styles from './TemporaryLanding.module.scss';

const TemporaryLanding = () => {
  return (
    <>
      <Header />
      <Services />
    </>
  );
};

export default TemporaryLanding;
