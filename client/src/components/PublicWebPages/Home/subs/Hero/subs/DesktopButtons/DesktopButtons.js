import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { HERO_SERVICES } from '@/components/PublicWebPages/Home/constants';
import styles from './DesktopButtons.module.scss';

const DesktopButtons = ({ compActiveIdx, setMoveToItemWithNum, setHandleMoveOnClick }) => {
  return (
    <>
      <Div type="flex" className="width-per-100 flex--wrap">
        {HERO_SERVICES?.map((item, idx) => (
          <Div
            key={idx}
            type="flex"
            hAlign="center"
            vAlign="center"
            className={cx(
              'p-all-temp-7  width-per-20 br-right-solid-1 br-theme-three mouse-hand text-center',
              compActiveIdx === item?.id ? 'bg-theme-one' : 'bg-theme-two'
            )}
            onClick={() => {
              setMoveToItemWithNum(item?.id);
              setHandleMoveOnClick(true);
            }}>
            {item?.title}
          </Div>
        ))}
      </Div>
    </>
  );
};

export default DesktopButtons;
