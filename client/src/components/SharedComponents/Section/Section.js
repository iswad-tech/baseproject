import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './Section.module.scss';

const Section = ({ hasLimitedWidth = true, title = '', className, children }) => {
  return (
    <>
      <Div className={cx('m-b-100 p-x-16', hasLimitedWidth && 'global-container', className)}>
        {title ? (
          <Div type="flex" hAlign="center" className="f-b f-title f-s-px-32 text-theme-one m-b-64">
            {title}
          </Div>
        ) : (
          ''
        )}
        <Div>{children}</Div>
      </Div>
    </>
  );
};

export default Section;
