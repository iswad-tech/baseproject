import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import MostPopular from './subs/MostPopular';
import NeedHelp from './subs/NeedHelp';
import Contact from './subs/Contact';
import styles from './CaseStudies.module.scss';

const CaseStudies = () => {
  return (
    <>
      <Div>
        <Heading type={1} className="m-y-100 p-x-temp-7 text-center">
          Find a Project That Suits Your Needs
        </Heading>
        <Div className="m-y-100 global-container p-x-temp-7">
          <MostPopular />
        </Div>
        <Div className="m-y-100 m-t-100 global-container p-x-temp-7">
          <NeedHelp />
        </Div>
        <Div className="m-t-100">
          <Contact />
        </Div>
      </Div>
    </>
  );
};

export default CaseStudies;
