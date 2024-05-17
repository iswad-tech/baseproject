import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Surface from '@/baseComponents/Surface';
import AppImage from '@/baseComponents/AppImage';
import InputWithButton from '@/baseComponents/InputWithButton';

import {
  SURFACE_COLOR_TYPES,
  BORDER_COLOR_TYPES,
  BORDER_RADIUS_TYPES,
  TEXT_COLOR_TYPES,
  TEXT_SIZE_TYPES,
  TEXT_FONT_TYPES,
  SPACINGS
} from '@/constants/devDesignVars';

import { lgDesignSize, smDesignSize } from '@/constants/vars';

import RobotImage from '@/images/js-Images/general/robot.png';

import styles from '../TemporaryLanding.module.scss';

const WhoWeAre = () => {
  return (
    <>
      <Div
        type="flex"
        hAlign="end"
        vAlign="center"
        className="pos-rel w-per-100 mY5"
        style={{ height: '466px' }}
        showIn={lgDesignSize}>
        <Div className="pos-abs pos-abs--lt">
          <AppImage src={RobotImage} width={681} height={466} />
        </Div>
        <Surface
          bgColor={SURFACE_COLOR_TYPES.secondary}
          paddings={{ all: SPACINGS[8] }}
          style={{ maxWidth: '800px', maxHeight: '370px' }}
          brRadiusType={BORDER_RADIUS_TYPES.full}
          className="z-10">
          <Surface
            textColorType={TEXT_COLOR_TYPES.primary}
            textSizeType={TEXT_SIZE_TYPES.xxxLarge}
            className="w-per-100 text-center">
            Who We Are
          </Surface>
          At ISWAD (Intelligent System Web App Development), we're on a mission to transform visions
          into reality through cutting-edge technology and strategic guidance. Founded in 2021 by
          Mohammad Mahdi Mohajer, ISWAD is dedicated to empowering startups and established
          businesses alike with bespoke software solutions that exceed expectations. <br /> <br />{' '}
          Future Vision: Leading AI Implementation in Healthcare 🤖💊 <br />
          ISWAD is committed to pioneering AI solutions for the healthcare industry, aiming to
          revolutionize patient care, diagnosis, and treatment through innovative technology
        </Surface>
      </Div>

      {/* Mobile */}

      <Div className="w-px-350 mY5 ml-auto mr-auto" showIn={smDesignSize}>
        <Div type="flex" hAlign="center" className="w-px-350 of-hidden">
          <AppImage src={RobotImage} width={350} height={250} />
        </Div>
        <Surface
          bgColor={SURFACE_COLOR_TYPES.secondary}
          paddings={{ all: SPACINGS[8] }}
          // brRadiusType={BORDER_RADIUS_TYPES.full}
          className="z-10">
          <Surface
            textColorType={TEXT_COLOR_TYPES.primary}
            textSizeType={TEXT_SIZE_TYPES.xxxLarge}
            className="w-per-100 text-center">
            Who We Are
          </Surface>
          At ISWAD (Intelligent System Web App Development), we're on a mission to transform visions
          into reality through cutting-edge technology and strategic guidance. Founded in 2021 by
          Mohammad Mahdi Mohajer, ISWAD is dedicated to empowering startups and established
          businesses alike with bespoke software solutions that exceed expectations. <br /> <br />{' '}
          Future Vision: Leading AI Implementation in Healthcare 🤖💊 <br />
          ISWAD is committed to pioneering AI solutions for the healthcare industry, aiming to
          revolutionize patient care, diagnosis, and treatment through innovative technology
        </Surface>
      </Div>
    </>
  );
};

export default WhoWeAre;
