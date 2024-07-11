import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import ServiceTemplate from '@/components/PublicWebPages/Shared/ServiceTemplate';

import HeroImg from '@/images/js-Images/general/Services/Coaching-ISWAD.jpg';

import { STEPS } from './constants';
import styles from './Coaching.module.scss';

const Coaching = () => {
  return (
    <>
      <ServiceTemplate
        src={HeroImg}
        title="Coaching & Advisory Services"
        description="Empower your business with expert coaching and advisory services tailored to your needs."
        steps={STEPS}
      />
    </>
  );
};

export default Coaching;
