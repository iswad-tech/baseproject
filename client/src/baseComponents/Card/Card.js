import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { CARD_TYPES } from '@/constants/devDesignVars';

import ServiceCard from './subs/ServiceCard';
import TemporaryServiceCard from './subs/TemporaryServiceCard';
import styles from './Card.module.scss';

const Card = ({ type, ...props }) => {
  return (
    <>
      {type === CARD_TYPES.serviceTest && <ServiceCard {...props} />}
      {type === CARD_TYPES.temporaryService && <TemporaryServiceCard {...props} />}
    </>
  );
};

export default Card;
