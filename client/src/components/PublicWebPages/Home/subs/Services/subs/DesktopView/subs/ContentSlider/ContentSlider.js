import React, { useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import HeightTransitionEffect from '@/baseComponents/ReusableComps/HeightTransitionEffect';
import List from '@/baseComponents/ReusableComps/List';
import Icon from '@/baseComponents/ReusableComps/Icon';
import PercentageBar from '@/baseComponents/ReusableComps/PercentageBar';
import PngIcon from '@/baseComponents/ReusableComps/PngIcon';

import { SERVICES } from '@/components/PublicWebPages/Home/constants';
import styles from './ContentSlider.module.scss';

const ContentSlider = ({
  compActiveIdx,
  setCompActiveIdx,
  moveToItemWithNum,
  setMoveToItemWithNum,
  handleMoveOnClick,
  setHandleMoveOnClick,
  percentage
}) => {
  return (
    <>
      {SERVICES?.map((item, idx) => (
        <Div
          key={idx}
          className={cx(
            'm-b-40 mouse-hand  m-x-temp-7 pos-rel br-all-solid-hidden br-rad-px-10 of-hidden',
            compActiveIdx === item?.id ? 'bg-gray-bright p-all-temp-7' : ''
          )}
          onClick={() => {
            setHandleMoveOnClick(true);
            setMoveToItemWithNum(item?.id);
          }}>
          <Div type="flex" vAlign="center" className="m-b-temp-7">
            <Div
              type="flex"
              hAlign="center"
              vAlign="center"
              className="width-px-20 height-px-20 m-r-8">
              <PngIcon type={item?.icon} />
            </Div>
            <Div className="f-b">{item?.title}</Div>
          </Div>
          <HeightTransitionEffect initialHeight={0} isActive={compActiveIdx === item?.id}>
            <List list={item?.description} />
          </HeightTransitionEffect>
          {compActiveIdx === item?.id ? (
            <Div className="pos-abs width-per-100" style={{ bottom: 0, left: 0 }}>
              <PercentageBar percentage={percentage} />
            </Div>
          ) : (
            ''
          )}
        </Div>
      ))}
    </>
  );
};

export default ContentSlider;
