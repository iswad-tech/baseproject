import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { CARD_TYPES } from '@/constants/devDesignVars';

import ServiceCard from './subs/ServiceCard';
import TemporaryServiceCard from './subs/TemporaryServiceCard';
import HomeServiceCard from './subs/HomeServiceCard';
import HomeAdvantageCard from './subs/HomeAdvantage';
import HomeInsightCard from './subs/HomeInsightCard';
import styles from '../../DevDesign.module.scss';

function DisplayCards() {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('p-all-8 width-per-90 flex--wrap', styles.card)}>
        {Object.keys(CARD_TYPES)?.map((item, idx) => {
          if (CARD_TYPES[item] === CARD_TYPES.serviceTest) {
            return <ServiceCard />;
          }

          if (CARD_TYPES[item] === CARD_TYPES.temporaryService) {
            return <TemporaryServiceCard key={idx} />;
          }

          if (CARD_TYPES[item] === CARD_TYPES.homeService) {
            return <HomeServiceCard key={idx} />;
          }

          if (CARD_TYPES[item] === CARD_TYPES.homeAdvantage) {
            return <HomeAdvantageCard key={idx} />;
          }

          if (CARD_TYPES[item] === CARD_TYPES.homeInsight) {
            return <HomeInsightCard key={idx} />;
          }
        })}
      </Div>
    </>
  );
}

export default DisplayCards;
