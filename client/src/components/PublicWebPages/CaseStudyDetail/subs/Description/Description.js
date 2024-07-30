import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Scope from './subs/Scope';
import styles from './Description.module.scss';

const Description = ({ scopes }) => {
  return (
    <>
      {scopes?.length
        ? scopes?.map((item, idx) => (
            <Div key={idx}>
              <Scope
                scopeNumber={item?.scopeNumber}
                scopeTitle={item?.scopeTitle}
                scopeDescription={item?.scopeDescription}
              />
            </Div>
          ))
        : [1, 2, 3, 4, 5]?.map((item, idx) => (
            <Div key={idx}>
              <Scope scopeNumber={item} scopeTitle={''} scopeDescription={''} />
            </Div>
          ))}
    </>
  );
};

export default Description;
