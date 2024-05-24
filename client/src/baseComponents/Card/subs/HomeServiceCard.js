import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import FlipDiv from '@/baseComponents/FlipDiv';
import FrontSide from '@/baseComponents/FlipDiv/subs/FrontSide';
import BackSide from '@/baseComponents/FlipDiv/subs/BackSide';
import List from '@/baseComponents/List';
import Icon from '@/baseComponents/Icon';

import { ANCHOR_TYPES, LIST_OF_ICONS } from '@/constants/devDesignVars';

import styles from '../Card.module.scss';
import Anchor from '@/baseComponents/Anchor';
import { PAGE_ROUTES } from '@/constants/vars';

const HomeServiceCard = ({ title, explanations, describtion, url = '/' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <Div className="width-per-100">
        <FlipDiv
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
          containerClassName="width-per-100 height-px-450">
          {/* ------------------------------------- */}
          {/* ------------------------------------- */}
          {/* Front Side */}
          {/* ------------------------------------- */}
          {/* ------------------------------------- */}
          <FrontSide
            type="flex"
            direction="vertical"
            distributedBetween
            className="global-bg-grad-one p-all-16 text-white br-rad-px-8 box-shadow-type-one">
            <Heading type={4} className="height-px-150">
              {title}
            </Heading>
            <Div>{describtion}</Div>
            <Div>
              <Anchor
                anchorType={ANCHOR_TYPES.noEffect}
                to={url}
                internal
                className="text-white text-underline">
                Learn More
              </Anchor>
            </Div>
            <Div type="flex" hAlign="end" vAlign="end" className="w-per-100">
              <Div className="" onClick={() => setIsFlipped(!isFlipped)}>
                <Icon type={LIST_OF_ICONS['circle-plus']} scale={1.2} />
              </Div>
            </Div>
          </FrontSide>
          {/* ------------------------------------- */}
          {/* ------------------------------------- */}
          {/* Back Side */}
          {/* ------------------------------------- */}
          {/* ------------------------------------- */}
          <BackSide
            type="flex"
            direction="vertical"
            distributedBetween
            className="bg-gray-bright p-all-16 text-black f-s-small br-rad-px-8 of-y-auto scroll-type-one box-shadow-type-one">
            <Div>
              <List type={1} list={explanations} />
            </Div>
            <Div>
              <Anchor
                anchorType={ANCHOR_TYPES.noEffect}
                to={url}
                internal
                className="text-black text-underline f-s-px-13">
                Learn More
              </Anchor>
            </Div>
            <Div type="flex" hAlign="end" vAlign="end" className="w-per-100">
              <Div className="" onClick={() => setIsFlipped(!isFlipped)}>
                <Icon type={LIST_OF_ICONS['circle-minus']} scale={1.2} />
              </Div>
            </Div>
          </BackSide>
          {/* ------------------------------------- */}
          {/* ------------------------------------- */}
          {/* ------------------------------------- */}
          {/* ------------------------------------- */}
        </FlipDiv>
      </Div>
    </>
  );
};

export default HomeServiceCard;
