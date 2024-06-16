import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import ServiceTemplate from '@/components/PublicWebPages/Shared/ServiceTemplate';

import HeroImg from '@/images/js-Images/general/Services/Team_Hero.jpg';

import { STEPS } from './constants';
import styles from './TeamAugmentation.module.scss';

const TeamAugmentation = () => {
  return (
    <>
      <ServiceTemplate
        src={HeroImg}
        title="Team Augmentation & Training"
        description="Enhance your team's capabilities with our expert augmentation and training services."
        steps={STEPS}
      />
    </>
  );
};

export default TeamAugmentation;
