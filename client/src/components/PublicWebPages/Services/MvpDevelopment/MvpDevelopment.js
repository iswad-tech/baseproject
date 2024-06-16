import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import ServiceTemplate from '@/components/PublicWebPages/Shared/ServiceTemplate';

import HeroImg from '@/images/js-Images/general/Services/MVP_Hero.jpg';

import { STEPS } from './constants';
import styles from './MvpDevelopment.module.scss';

const MvpDevelopment = () => {
  return (
    <>
      <ServiceTemplate
        src={HeroImg}
        title="MVP Development"
        description="Turn your idea into a market-ready product with our comprehensive MVP development services."
        steps={STEPS}
      />
    </>
  );
};

export default MvpDevelopment;
