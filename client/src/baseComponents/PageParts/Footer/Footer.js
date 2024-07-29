import React from 'react';
import { Div, Row, Column } from 'basedesign-iswad';
import dynamic from 'next/dynamic';

import Logo from './subs/Logo';
import Company from './subs/Company';
import LearnMore from './subs/LearnMore';
import Contact from './subs/Contact';
import Follow from './subs/Follow';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <Div className="bg-theme-one text-white p-t-32 p-x-16 f-s-regular">
        <Row className="global-container">
          <Column xs={12} sm={12} md={12} lg={3} className="m-b-32">
            <Div className="width-per-100">
              <Logo />
            </Div>
          </Column>
          <Column xs={12} sm={6} md={6} lg={2} className="m-b-32">
            <Div className="width-per-100">
              <Company />
            </Div>
          </Column>
          <Column xs={12} sm={6} md={6} lg={2} className="m-b-32">
            <Div className="width-per-100">
              <LearnMore />
            </Div>
          </Column>
          <Column xs={12} sm={6} md={6} lg={3} className="m-b-32">
            <Div className="width-per-100">
              <Contact />
            </Div>
          </Column>
          <Column xs={12} sm={6} md={6} lg={2} className="m-b-32">
            <Div>
              <Follow />
            </Div>
          </Column>
        </Row>
      </Div>
    </>
  );
};

export default Footer;
