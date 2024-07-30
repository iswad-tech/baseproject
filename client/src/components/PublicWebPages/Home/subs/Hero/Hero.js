import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import ResponsiveSwipeableSlider from '@/baseComponents/ReusableComps/ResponsiveSwipeableSlider';
import AppImage from '@/baseComponents/ReusableComps/AppImage';
import DivMinFullHeight from '@/baseComponents/ReusableComps/DivMinFullHeight';
import Button from '@/baseComponents/ReusableComps/Button';
import Paragraph from '@/baseComponents/ReusableComps/Paragraph';
import Anchor from '@/baseComponents/ReusableComps/Anchor';

import { MEETING_LINK } from '@/constants/vars';
import { ANCHOR_TYPES } from '@/constants/devDesignVars';

import { HERO_ITEMS, SLIDESHOWS_DURATION } from '../../constants';
import MobileButtons from './subs/MobileButtons';
import DesktopButtons from './subs/DesktopButtons';
import styles from './Hero.module.scss';

const Hero = ({ contactRef }) => {
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
        className={cx('width-per-100 m-l-auto m-r-auto dir-ltr pos-rel', styles.container)}>
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
            {HERO_ITEMS?.map((item, idx) => (
              <DivMinFullHeight
                divHeightIsConst
                withoutFooter
                key={idx}
                type="flex"
                hAlign="start"
                className={cx('text-white of-hidden pos-rel')}
                style={{ width: parentWidth }}>
                <AppImage src={item?.src} width={parentWidth} alt={item?.imgAlt} />
                <Div
                  type="flex"
                  direction="vertical"
                  hAlign="center"
                  className={cx(
                    'pos-abs width-per-100 height-per-100 max-width-px-700',
                    styles.contentContainer
                  )}>
                  <Heading
                    type={1}
                    className="m-b-temp-7 text-theme-one global-hyphenated width-per-100 text-center">
                    {item?.title}
                  </Heading>
                  <Paragraph className="m-b-temp-7 text-center">{item?.text}</Paragraph>
                  <Div className="width-px-300">
                    <Anchor to={MEETING_LINK} internal={false} anchorType={ANCHOR_TYPES.noEffect}>
                      <Button className="height-px-50 f-b f-s-px-18">Start Your Project</Button>
                    </Anchor>
                  </Div>
                </Div>
              </DivMinFullHeight>
            ))}
          </ResponsiveSwipeableSlider>
        ) : (
          ''
        )}

        <Div
          className="pos-abs text-white width-per-100 height-px-75"
          style={{ bottom: '75px', left: 0 }}>
          <Div
            type="flex"
            vAlign="end"
            className="height-px-75 width-per-100 p-b-20"
            showIn={['xs', 'sm', 'md']}>
            <MobileButtons
              compActiveIdx={compActiveIdx}
              setMoveToItemWithNum={setMoveToItemWithNum}
              setHandleMoveOnClick={setHandleMoveOnClick}
            />
          </Div>
        </Div>

        <Div
          className="pos-abs text-white width-per-100 height-px-75"
          style={{ bottom: 0, left: 0 }}
          showIn={['lg']}>
          <Div className="height-px-75 width-per-100">
            <DesktopButtons
              compActiveIdx={compActiveIdx}
              setMoveToItemWithNum={setMoveToItemWithNum}
              setHandleMoveOnClick={setHandleMoveOnClick}
            />
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Hero;
