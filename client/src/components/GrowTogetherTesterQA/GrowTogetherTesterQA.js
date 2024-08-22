import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import AppDescription from './subs/AppDescription';
import AppForm from './subs/AppForm';
import styles from './GrowTogetherTesterQA.module.scss';

const GrowTogetherTesterQA = () => {
  return (
    <>
      <Div>
        <AppDescription />
        <AppForm />
      </Div>
    </>
  );
};

export default GrowTogetherTesterQA;
