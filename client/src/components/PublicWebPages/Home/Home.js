import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Section from '@/components/SharedComponents/Section';

import Landing from './subs/Landing';
import WhoWeAre from './subs/WhoWeAre';
import Services from './subs/Services';
import OurAdvantage from './subs/OurAdvantage';
import Insights from './subs/Insights';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <Div>
        <Landing />
        <Section title="" className="m-t-100">
          <WhoWeAre />
        </Section>
        <Section title="Our Services" className="m-t-100">
          <Services />
        </Section>
        <Section title="" className="m-t-100">
          <OurAdvantage />
        </Section>
        <Section title="Interesting Insights" className="m-t-100">
          <Insights />
        </Section>
      </Div>
    </>
  );
};

export default Home;
