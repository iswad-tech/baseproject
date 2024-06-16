import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import ServiceTemplate from '@/components/PublicWebPages/Shared/ServiceTemplate';

import HeroImg from '@/images/js-Images/general/Services/Branding_Hero.jpg';

import { STEPS } from './constants';
import styles from './Branding.module.scss';

const Branding = () => {
  return (
    <>
      <ServiceTemplate
        src={HeroImg}
        title="Website Development & Branding"
        description="Crafting unique brand identities and building stunning websites that resonate with your audience."
        steps={STEPS}
      />
    </>
  );
};

export default Branding;
