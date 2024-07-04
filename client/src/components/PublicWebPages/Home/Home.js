import React, { useRef } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Insights from '@/components/PublicWebPages/Shared/Insights';
import Contact from '@/components/PublicWebPages/Shared/Contact';

import Hero from './subs/Hero';
import About from './subs/About';
import Services from './subs/Services';
import Unique from './subs/Unique';
import styles from './Home.module.scss';
import Anchor from '@/baseComponents/ReusableComps/Anchor';

const Home = () => {
  const contactRef = useRef();

  return (
    <>
      <Div className="">
        <Hero contactRef={contactRef} />
      </Div>
      <Div>
        <About />
      </Div>
      <Div className="global-container p-all-temp-7">
        <Services contactRef={contactRef} />
      </Div>
      <Div>
        <Unique />
      </Div>
      {/* <Div className="widht-per-100 global-container m-y-100">
        <Insights />
      </Div> */}
      <Div ref={(el) => (contactRef.current = el)}>
        <Contact />
      </Div>

      {/* <Anchor to="mohimohajer://register">
        <Div className="p-all-16 m-all-16 bg-red height-px-80">Go to App</Div>
      </Anchor>

      <Anchor to="https://makeclient.ngrok.io/register">
        <Div className="p-all-16 m-all-16 bg-blue height-px-80">Go to App</Div>
      </Anchor> */}
    </>
  );
};

export default Home;
