import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import DivWidthDynamic from '@/baseComponents/ReusableComps/DivWidthDynamic';
import AppImage from '@/baseComponents/ReusableComps/AppImage';
import Text from '@/baseComponents/ReusableComps/Text';

import styles from '../Card.module.scss';

const AboutTeam = ({ src, name, role, description }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  return (
    <>
      <Div className="width-per-100 bg-white box-shadow-type-one br-rad-3xl p-all-temp-7">
        <Div type="flex" direction="vertical" distributedBetween>
          <Div className="width-per-100">
            <DivWidthDynamic
              type="flex"
              hAlign="center"
              vAlign="center"
              className="width-per-100 br-rad-per-50 of-hidden br-all-solid-3 br-theme-one max-width-px-200 m-l-auto m-r-auto"
              setContainerWidth={setContainerWidth}>
              <AppImage src={src} width={containerWidth} heightOverWidthAsprctRatio={1} />
            </DivWidthDynamic>

            <Div className="m-t-temp-7 f-b one-line">{name}</Div>
            <Div className="m-t-temp-7 f-b one-line">{role}</Div>

            <Text
              className={'m-t-temp-7'}
              initialTextContainerHeight={150}
              textMessage={description}
            />
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default AboutTeam;
