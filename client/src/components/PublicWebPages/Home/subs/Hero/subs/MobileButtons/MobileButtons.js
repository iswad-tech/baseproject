import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { HERO_SERVICES } from '@/components/PublicWebPages/Home/constants';
import styles from './MobileButtons.module.scss';

const MobileButtons = ({ compActiveIdx, setMoveToItemWithNum, setHandleMoveOnClick }) => {
  return (
    <>
      <Div type="flex" hAlign="center" className="width-per-100 flex--wrap">
        {HERO_SERVICES?.map((item, idx) => (
          <Div
            key={idx}
            type="flex"
            hAlign="center"
            vAlign="center"
            className={cx(
              'width-px-20 height-px-20 br-rad-per-50 m-x-temp-2',
              compActiveIdx === item?.id ? 'bg-theme-one' : 'bg-theme-two'
            )}
            onClick={() => {
              setMoveToItemWithNum(item?.id);
              setHandleMoveOnClick(true);
            }}
          />
        ))}
      </Div>
    </>
  );
};

export default MobileButtons;
