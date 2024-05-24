import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';
import AppImage from '@/baseComponents/AppImage';

import advantage from '@/images/js-Images/general/HomePage/Advantage.png';

import { ADVANTAGES } from '../constants';
import styles from '../Home.module.scss';
import { CARD_TYPES } from '@/constants/devDesignVars';

const OurAdvantage = () => {
  return (
    <>
      <Div type="flex" hAlign="center" className="width-per-100">
        <Div className="br-all-solid-2 br-rad-px-10 br-theme-one p-all-32">
          <Div
            type="flex"
            hAlign="center"
            className="f-b f-title f-s-px-32 text-theme-one m-b-16 text-center">
            What Makes Us Unique?
          </Div>
          <Div
            type="flex"
            hAlign="center"
            className="bg-theme-three br-rad-px-20 p-all-16 flex--wrap pos-rel z-100 pos-rel">
            {ADVANTAGES?.map((item, idx) => (
              <Div
                type="flex"
                hAlign="center"
                key={idx}
                className="width-px-275 m-b-16 z-100 pos-rel m-l-auto m-r-auto pos-rel">
                <Div className="width-px-250">
                  <Card
                    type={CARD_TYPES.homeAdvantage}
                    title={item?.title}
                    explanation={item?.explanation}
                  />
                </Div>
                {idx === 0 ? (
                  <Div
                    className="pos-abs go-under bg-red bg-transparent"
                    style={{ top: '-25px', left: '-75px' }}>
                    <AppImage src={advantage} width={100} objectFit="contain" />
                  </Div>
                ) : (
                  ''
                )}
              </Div>
            ))}
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default OurAdvantage;
