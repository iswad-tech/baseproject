import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { CARD_TYPES } from '@/constants/devDesignVars';

import ServiceCard from './subs/ServiceCard';
import TemporaryServiceCard from './subs/TemporaryServiceCard';
import styles from '../../DevDesign.module.scss';

function DisplayCards() {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p1 w-per-90 flex--wrap', styles.card)}>
        {Object.keys(CARD_TYPES).map((item, idx) => {
          if (item === CARD_TYPES.service) {
            return <ServiceCard key={idx} />;
          } else if (item === CARD_TYPES.temporaryService) {
            return <TemporaryServiceCard key={idx} />;
          } else {
            return item;
          }
        })}
      </Div>
    </>
  );
}

export default DisplayCards;
