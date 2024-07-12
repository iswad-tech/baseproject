import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import ResponsiveSwipeableSlider from '@/baseComponents/ReusableComps/ResponsiveSwipeableSlider';
import AppImage from '@/baseComponents/ReusableComps/AppImage';
import DivMinFullHeight from '@/baseComponents/ReusableComps/DivMinFullHeight';
import Button from '@/baseComponents/ReusableComps/Button';
import Paragraph from '@/baseComponents/ReusableComps/Paragraph';

import { SERVICES, SLIDESHOWS_DURATION } from '@/components/PublicWebPages/Home/constants';
import styles from './ImgSlider.module.scss';

const ImgSlider = ({
  compActiveIdx,
  setCompActiveIdx,
  moveToItemWithNum,
  setMoveToItemWithNum,
  handleMoveOnClick,
  setHandleMoveOnClick,
  percentage,
  setPercentage
}) => {
  const parentRef = useRef();

  const [parentWidth, setParentWidth] = useState(0);
  const [moveRight, setMoveRight] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [mustShowSlider, setMustShowSlider] = useState(true);
  const [automaticPlay, setAutomaticPlay] = useState(false);
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
              <Div
                key={idx}
                type="flex"
                hAlign="center"
                className={cx('text-white of-hidden pos-rel br-rad-3xl of-hidden')}
                style={{ width: parentWidth }}>
                <AppImage
                  src={item?.src}
                  width={parentWidth}
                  heightOverWidthAsprctRatio={1}
                  alt={item?.imgAlt}
                />
              </Div>
            ))}
          </ResponsiveSwipeableSlider>
        ) : (
          ''
        )}
      </Div>
    </>
  );
};

export default ImgSlider;
