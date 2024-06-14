import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import DivWidthDynamic from '@/baseComponents/ReusableComps/DivWidthDynamic';
import DivConvertTextToHtml from '@/baseComponents/ReusableComps/DivConvertTextToHtml';

import styles from './Scope.module.scss';

const Scope = ({ scopeNumber, scopeTitle, scopeDescription }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  return (
    <>
      <DivWidthDynamic
        setContainerWidth={setContainerWidth}
        type="flex"
        direction={containerWidth < 800 ? 'vertical' : 'horizontal'}
        className="width-per-100 global-container p-all-temp-7">
        <Div
          type="flex"
          vAlign="center"
          className={cx('height-px-50 min-width-px-300', containerWidth < 800 ? '' : 'm-r-temp-7')}>
          <Heading className="m-r-temp-7 text-theme-one">{scopeNumber}</Heading>
          <Heading type={5}>{scopeTitle}</Heading>
        </Div>
        <Div className="bg-white box-shadow-type-one br-rad-3xl p-all-temp-7 width-per-100">
          <DivConvertTextToHtml text={scopeDescription} />
        </Div>
      </DivWidthDynamic>
    </>
  );
};

export default Scope;
