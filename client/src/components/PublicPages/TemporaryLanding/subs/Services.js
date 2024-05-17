import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import ResponsiveSwipeableSlider from '@/baseComponents/ResponsiveSwipeableSlider';
import ResponsiveSwipeableSliderItem from '@/baseComponents/ResponsiveSwipeableSlider/subs/ResponsiveSwipeableSliderItem';
import Button from '@/baseComponents/Button';
import Card from '@/baseComponents/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from '../TemporaryLanding.module.scss';
import { SERVICES } from '../constants';
import Icon from '@/baseComponents/Icon';
import { COLORS } from '@/constants/vars';

const Services = () => {
  const parentRef = useRef();

  const [parentWidth, setParentWidth] = useState(0);
  const [moveRight, setMoveRight] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveToItemWithNum, setMoveToItemWithNum] = useState(0);
  const [mustShowSlider, setMustShowSlider] = useState(true);
  const [automaticPlay, setAutomaticPlay] = useState(false);
  const [userSwiped, setUserSwiped] = useState(false);

  useEffect(() => {
    if (parentRef?.current?.clientWidth) {
      setParentWidth(parentRef.current.clientWidth);
    }
  }, [parentRef?.current?.clientWidth]);

  useEffect(() => {
    if (automaticPlay) {
      setTimeout(() => {
        setMoveRight(true);
        setTimeout(() => {
          setAutomaticPlay(false);
        }, 10);
      }, 5000);
    } else if (!automaticPlay && !userSwiped) {
      setTimeout(() => {
        setAutomaticPlay(true);
      }, 5000);
    }
  }, [automaticPlay, userSwiped]);

  return (
    <>
      <Div
        className={cx('w-per-100 ml-auto mr-auto dir-ltr mt8 px4')}
        style={{ maxWidth: '1500px' }}>
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className="px4"
          ref={(el) => (parentRef.current = el)}>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            onClick={() => setMoveRight(true)}
            className="w-px-30 height-px-30 p1 bgRed br-rad-px-20 bgThemeTwo m1">
            {' '}
            <Icon type="angle-left" color={COLORS.brandSecondary} />
          </Div>
          <Div className="w-per-100">
            {' '}
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
                isDraggable={true}>
                {SERVICES?.map((item, idx) => (
                  <ResponsiveSwipeableSliderItem key={idx} className="pos-rel w-px-350">
                    <Div type="flex" hAlign="center" vAlign="center" className={cx('w-px-300')}>
                      <Card
                        type={CARD_TYPES.temporaryService}
                        describtion={item.describtion}
                        title={item.title}
                        explanations={item.explanations}
                      />
                    </Div>
                  </ResponsiveSwipeableSliderItem>
                ))}
              </ResponsiveSwipeableSlider>
            ) : (
              ''
            )}
          </Div>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            onClick={() => setMoveLeft(true)}
            className="w-px-30 height-px-30 p1 bgRed br-rad-px-20 bgThemeTwo m1">
            {' '}
            <Icon type="angle-right" color={COLORS.brandSecondary} />
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Services;
