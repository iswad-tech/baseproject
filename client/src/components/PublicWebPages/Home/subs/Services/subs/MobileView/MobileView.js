import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import ResponsiveSwipeableSlider from '@/baseComponents/ReusableComps/ResponsiveSwipeableSlider';
import Card from '@/baseComponents/ReusableComps/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import { SERVICES, SLIDESHOWS_DURATION } from '@/components/PublicWebPages/Home/constants';
import styles from './MobileView.module.scss';

const MobileView = () => {
  const parentRef = useRef();

  const [parentWidth, setParentWidth] = useState(0);
  const [compActiveIdx, setCompActiveIdx] = useState(0);
  const [moveRight, setMoveRight] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveToItemWithNum, setMoveToItemWithNum] = useState(false);
  const [handleMoveOnClick, setHandleMoveOnClick] = useState(false);
  const [mustShowSlider, setMustShowSlider] = useState(true);
  const [automaticPlay, setAutomaticPlay] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [userSwiped, setUserSwiped] = useState(false);

  useEffect(() => {
    if (parentRef?.current?.clientWidth) {
      setParentWidth(parentRef.current.clientWidth);
    }
  }, [parentRef?.current?.clientWidth]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage >= 100) {
          setAutomaticPlay(true);
          return 0;
        }
        return prevPercentage + (10 / SLIDESHOWS_DURATION) * 100;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (automaticPlay) {
      setMoveRight(true);
      const timeout = setTimeout(() => {
        setAutomaticPlay(false);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [automaticPlay]);

  return (
    <>
      <Div
        ref={(el) => (parentRef.current = el)}
        className={cx('width-per-100 m-l-auto m-r-auto dir-ltr')}>
        {parentWidth ? (
          <ResponsiveSwipeableSlider
            moveRight={moveRight}
            setMoveRight={setMoveRight}
            moveLeft={moveLeft}
            setMoveLeft={setMoveLeft}
            moveToItemWithNum={moveToItemWithNum}
            setMoveToItemWithNum={setMoveToItemWithNum}
            mustShowSlider={mustShowSlider}
            setMustShowSlider={setMustShowSlider}
            setUserSwiped={setUserSwiped}
            isSwipeable={true}
            isDraggable={true}
            compActiveIdx={compActiveIdx}
            setCompActiveIdx={setCompActiveIdx}
            useCompActiveIdx
            handleMoveOnClick={handleMoveOnClick}
            setHandleMoveOnClick={setHandleMoveOnClick}>
            {SERVICES?.map((item, idx) => (
              <Div key={idx} type="flex" hAlign="center" className={cx('width-px-300 m-r-16')}>
                <Card
                  type={CARD_TYPES.homeService}
                  src={item?.src}
                  title={item?.title}
                  description={item?.description}
                  icon={item?.icon}
                />
              </Div>
            ))}
          </ResponsiveSwipeableSlider>
        ) : (
          ''
        )}
        <Div type="flex" hAlign="center" className="width-per-100 flex--wrap m-t-temp-7">
          {SERVICES?.map((item, idx) => (
            <Div
              key={idx}
              type="flex"
              hAlign="center"
              vAlign="center"
              direction="vertical"
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
      </Div>
    </>
  );
};

export default MobileView;
