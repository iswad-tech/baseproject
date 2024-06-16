import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { CARD_TYPES } from '@/constants/devDesignVars';

import ServiceCard from './subs/ServiceCard';
import TemporaryService from './subs/TemporaryService';
import CaseStudy from './subs/CaseStudy';
import CaseStudyInfo from './subs/CaseStudyInfo';
import BlogInfo from './subs/BlogInfo';
import HomeService from './subs/HomeService';
import HomeUnique from './subs/HomeUnique';
import AboutQulity from './subs/AboutQulity';
import AboutTeam from './subs/AboutTeam';
import ServiceStep from './subs/ServiceStep';
import styles from './Card.module.scss';

const Card = ({ type, ...props }) => {
  return (
    <>
      {type === CARD_TYPES.serviceTest && <ServiceCard {...props} />}
      {type === CARD_TYPES.temporaryService && <TemporaryService {...props} />}
      {type === CARD_TYPES.caseStudy && <CaseStudy {...props} />}
      {type === CARD_TYPES.caseStudyInfo && <CaseStudyInfo {...props} />}
      {type === CARD_TYPES.blogInfo && <BlogInfo {...props} />}
      {type === CARD_TYPES.homeService && <HomeService {...props} />}
      {type === CARD_TYPES.homeUnique && <HomeUnique {...props} />}
      {type === CARD_TYPES.aboutQuality && <AboutQulity {...props} />}
      {type === CARD_TYPES.aboutTeam && <AboutTeam {...props} />}
      {type === CARD_TYPES.serviceStep && <ServiceStep {...props} />}
    </>
  );
};

export default Card;
