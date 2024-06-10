import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Scope from './subs/Scope';
import styles from './Description.module.scss';

const Description = ({ scopes }) => {
  return (
    <>
      {scopes?.map((item, idx) => (
        <Div key={idx}>
          <Scope
            scopeNumber={item?.scopeNumber}
            scopeTitle={item?.scopeTitle}
            scopeDescription={item?.scopeDescription}
          />
        </Div>
      ))}
    </>
  );
};

export default Description;
