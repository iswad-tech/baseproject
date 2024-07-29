import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import dynamic from 'next/dynamic';

import Anchor from '@/baseComponents/ReusableComps/Anchor';
const PngIcon = dynamic(() => import('@/baseComponents/ReusableComps/PngIcon'));

import { ANCHOR_TYPES } from '@/constants/devDesignVars';

import { FOLLOW } from '../constants';
import styles from '../Footer.module.scss';

const Follow = () => {
  return (
    <>
      <Div className="global-font-title f-b height-px-30">Follow</Div>
      <Div type="flex" vAlign="start" className={cx(styles.heightForText, '')}>
        {FOLLOW?.map((item, idx) => (
          <Anchor
            key={idx}
            to={item?.url}
            internal={false}
            anchorType={ANCHOR_TYPES.noEffect}
            className="m-r-8">
            <Div type="flex" vAlign="start" key={idx} className="m-b-8">
              <Div
                type="flex"
                vAlign="center"
                hAlign="center"
                className="width-px-40 height-px-40 br-rad-per-50 of-hidden">
                <PngIcon type={item?.icon} width={40} height={40} />
              </Div>
              <Div>{item?.value}</Div>
            </Div>
          </Anchor>
        ))}
      </Div>
    </>
  );
};

export default Follow;
