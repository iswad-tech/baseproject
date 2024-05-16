import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Header from './subs/Header';
import styles from './TemporaryLanding.module.scss';
import WhoWeAre from './subs/WhoWeAre';
import Surface from '@/baseComponents/Surface';
import Footer from './subs/Footer';

const TemporaryLanding = () => {
  return (
    <>
      <Header />
      <Surface className="w-per-100 ml-auto mr-auto" style={{ maxWidth: '1300px' }}>
        <WhoWeAre />
      </Surface>
      <Footer />
    </>
  );
};

export default TemporaryLanding;
