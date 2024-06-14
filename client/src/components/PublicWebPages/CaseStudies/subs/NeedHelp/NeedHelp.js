import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import { NEED_HELP_ITEMS } from '../../constants';
import styles from './NeedHelp.module.scss';

const NeedHelp = () => {
  return (
    <>
      <Heading type={2} className="text-center m-b-temp-10">
        Need Help Deciding?
      </Heading>
      <Div className="">
        {NEED_HELP_ITEMS?.map((item, idx) => (
          <Div key={idx} className="width-per-100 m-b-temp-7 m-r-temp-7">
            <Card
              type={CARD_TYPES.caseStudyInfo}
              title={item?.title}
              description={item?.description}
              src={item?.src}
            />
          </Div>
        ))}
      </Div>
    </>
  );
};

export default NeedHelp;
