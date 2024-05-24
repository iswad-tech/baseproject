import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { CARD_TYPES } from '@/constants/devDesignVars';

import ServiceCard from './subs/ServiceCard';
import TemporaryServiceCard from './subs/TemporaryServiceCard';
import HomeServiceCard from './subs/HomeServiceCard';
import HomeAdvantage from './subs/HomeAdvantage';
import HomeInsight from './subs/HomeInsight';
import styles from './Card.module.scss';

const Card = ({ type, ...props }) => {
  return (
    <>
      {type === CARD_TYPES.serviceTest && <ServiceCard {...props} />}
      {type === CARD_TYPES.temporaryService && <TemporaryServiceCard {...props} />}
      {type === CARD_TYPES.homeService && <HomeServiceCard {...props} />}
      {type === CARD_TYPES.homeAdvantage && <HomeAdvantage {...props} />}
      {type === CARD_TYPES.homeInsight && <HomeInsight {...props} />}
    </>
  );
};

export default Card;
