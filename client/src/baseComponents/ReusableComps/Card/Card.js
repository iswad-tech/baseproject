import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { CARD_TYPES } from '@/constants/devDesignVars';

import BlogInfo from './subs/BlogInfo';
import styles from './Card.module.scss';

const Card = ({ type, ...props }) => {
  return <>{type === CARD_TYPES.blogInfo && <BlogInfo {...props} />}</>;
};

export default Card;
