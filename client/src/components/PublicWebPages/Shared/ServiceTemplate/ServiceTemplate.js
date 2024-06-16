import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Contact from '@/components/PublicWebPages/Shared/Contact';

import Hero from './subs/Hero';
import Steps from './subs/Steps';
import styles from './ServiceTemplate.module.scss';

const ServiceTemplate = ({ src, title = '', description = '', steps = [] }) => {
  return (
    <>
      <Hero src={src} title={title} description={description} />
      <Steps steps={steps} />
      <Contact />
    </>
  );
};

export default ServiceTemplate;
