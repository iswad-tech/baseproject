import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { HERO_SERVICES } from '@/components/PublicWebPages/Home/constants';
import styles from './DesktopButtons.module.scss';

const DesktopButtons = ({ compActiveIdx, setMoveToItemWithNum, setHandleMoveOnClick }) => {
  return (
    <>
      <Div type="flex" className="width-per-100 height-px-75">
        {HERO_SERVICES?.map((item, idx) => (
          <Div
            key={idx}
            type="flex"
            hAlign="center"
            vAlign="center"
            className={cx(
              'width-per-20 br-right-solid-1 br-theme-three mouse-hand text-center height-px-75',
              compActiveIdx === item?.id ? styles.activeBg : styles.deActiveBg
            )}
            onClick={() => {
              setMoveToItemWithNum(item?.id);
              setHandleMoveOnClick(true);
            }}>
            <Div type="flex" vAlign="center" hAlign="center" className="width-per-100 height-px-75">
              {item?.title}
            </Div>
          </Div>
        ))}
      </Div>
    </>
  );
};

export default DesktopButtons;
