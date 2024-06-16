import React, { useRef } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Contact from '@/components/PublicWebPages/Shared/Contact';

import Hero from './subs/Hero';
import Steps from './subs/Steps';
import styles from './ServiceTemplate.module.scss';

const ServiceTemplate = ({ src, title = '', description = '', steps = [] }) => {
  const contactRef = useRef();
  return (
    <>
      <Hero src={src} title={title} description={description} contactRef={contactRef} />
      <Steps steps={steps} />
      <Div ref={(el) => (contactRef.current = el)}>
        <Contact />
      </Div>
    </>
  );
};

export default ServiceTemplate;
