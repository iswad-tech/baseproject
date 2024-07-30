import React, { useRef } from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import Contact from '@/components/PublicWebPages/Shared/Contact';

import Cases from './subs/Cases';
import MostPopular from './subs/MostPopular';
import NeedHelp from './subs/NeedHelp';
import styles from './CaseStudies.module.scss';

const CaseStudies = () => {
  const contactRef = useRef();
  return (
    <>
      <Heading type={1} className="m-t-100 height-px-200 width-per-100 text-center p-x-16">
        Find a Project That Suits Your Needs
      </Heading>

      <Div className="global-container p-x-temp-7">
        <Cases />
      </Div>
      <Div className="m-y-100 m-t-100 global-container p-x-temp-7">
        <NeedHelp contactRef={contactRef} />
      </Div>
      <Div className="m-t-100" ref={(el) => (contactRef.current = el)}>
        <Contact />
      </Div>
    </>
  );
};

export default CaseStudies;
