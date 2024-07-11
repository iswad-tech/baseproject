import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import ServiceTemplate from '@/components/PublicWebPages/Shared/ServiceTemplate';

import HeroImg from '@/images/js-Images/general/Services/App-ISWAD.jpg';

import { STEPS } from './constants';
import styles from './AppDevelopment.module.scss';

const AppDevelopment = () => {
  return (
    <>
      <ServiceTemplate
        src={HeroImg}
        title="Custom Web & Mobile App Development"
        description="Build powerful and scalable web and mobile applications tailored to your business needs."
        steps={STEPS}
      />
    </>
  );
};

export default AppDevelopment;
