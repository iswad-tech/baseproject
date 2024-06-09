import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import ImgSlider from './subs/ImgSlider';
import ContentSlider from './subs/ContentSlider';
import styles from './DesktopView.module.scss';

const DesktopView = () => {
  const [compActiveIdx, setCompActiveIdx] = useState(0);
  const [moveToItemWithNum, setMoveToItemWithNum] = useState(false);
  const [handleMoveOnClick, setHandleMoveOnClick] = useState(false);
  const [percentage, setPercentage] = useState(0);

  return (
    <>
      <Div type="flex" className="p-t-temp-7">
        <Div className="width-per-50">
          <ContentSlider
            compActiveIdx={compActiveIdx}
            setCompActiveIdx={setCompActiveIdx}
            moveToItemWithNum={moveToItemWithNum}
            setMoveToItemWithNum={setMoveToItemWithNum}
            handleMoveOnClick={handleMoveOnClick}
            setHandleMoveOnClick={setHandleMoveOnClick}
            percentage={percentage}
          />
        </Div>
        <Div className="width-per-50">
          <ImgSlider
            compActiveIdx={compActiveIdx}
            setCompActiveIdx={setCompActiveIdx}
            moveToItemWithNum={moveToItemWithNum}
            setMoveToItemWithNum={setMoveToItemWithNum}
            handleMoveOnClick={handleMoveOnClick}
            setHandleMoveOnClick={setHandleMoveOnClick}
            percentage={percentage}
            setPercentage={setPercentage}
          />
        </Div>
      </Div>
    </>
  );
};

export default DesktopView;
