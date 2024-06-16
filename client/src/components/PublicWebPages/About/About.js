import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Insights from '@/components/PublicWebPages/Shared/Insights';
import Contact from '@/components/PublicWebPages/Shared/Contact';

import Hero from './subs/Hero';
import KnowUs from './subs/KnowUs';
import Qualities from './subs/Qualities';
import Team from './subs/Team';
import styles from './About.module.scss';

const About = () => {
  return (
    <>
      <Hero />
      <Div>
        <KnowUs />
      </Div>
      <Div>
        <Qualities />
      </Div>
      <Div>
        <Team />
      </Div>
      {/* <Div className="widht-per-100 global-container ">
        <Insights />
      </Div> */}
      <Div>
        <Contact />
      </Div>
    </>
  );
};

export default About;
