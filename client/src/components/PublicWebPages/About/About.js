import React, { useRef } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Insights from '@/components/PublicWebPages/Shared/Insights';
import Contact from '@/components/PublicWebPages/Shared/Contact';

import Hero from './subs/Hero';
import KnowUs from './subs/KnowUs';
import Qualities from './subs/Qualities';
import Team from './subs/Team';
import styles from './About.module.scss';

const About = ({ popularBlogs }) => {
  const contactRef = useRef();

  return (
    <>
      <Hero contactRef={contactRef} />
      <Div>
        <KnowUs />
      </Div>
      <Div>
        <Qualities />
      </Div>
      <Div>
        <Team />
      </Div>
      <Div className="widht-per-100 global-container ">
        <Insights popularBlogs={popularBlogs} />
      </Div>
      <Div ref={(el) => (contactRef.current = el)}>
        <Contact />
      </Div>
    </>
  );
};

export default About;
