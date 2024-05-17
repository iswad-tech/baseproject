import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Header from './subs/Header';
import Services from './subs/Services';
import styles from './TemporaryLanding.module.scss';
import WhoWeAre from './subs/WhoWeAre';
import Surface from '@/baseComponents/Surface';
import Footer from './subs/Footer';

const TemporaryLanding = () => {
  return (
    <>
      <Div type="flex" direction="vertical" distributedBetween className="height-vh-full">
        <Div>
          <Header />
          <Div className="">
            <Services />
          </Div>
          <Div></Div>
          <Surface className="w-per-100 ml-auto mr-auto" style={{ maxWidth: '1500px' }}>
            <WhoWeAre />
          </Surface>
        </Div>
        <Footer />
      </Div>
    </>
  );
};

export default TemporaryLanding;
