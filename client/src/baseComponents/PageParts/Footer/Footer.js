import React from 'react';
import { Div, Row, Column } from 'basedesign-iswad';
import dynamic from 'next/dynamic';
import Script from 'next/script';

import { USE_GOOGLE_ADDS } from 'config';

import Logo from './subs/Logo';
import Company from './subs/Company';
import LearnMore from './subs/LearnMore';
import Contact from './subs/Contact';
import Follow from './subs/Follow';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      {USE_GOOGLE_ADDS && (
        <>
          {/* Event Tracking for Subscribe Button */}
          <Script id="subscribe-tracking" strategy="afterInteractive">
            {`
      document.addEventListener('click', function(e) {
        if (e.target.closest('button') && e.target.innerText.includes('Subscribe')) {
          gtag('event', 'conversion', {
            'send_to': 'AW-16679291614/VAizCPnUus0ZEN6Vp5E-'
          });
        }
      }, true);
    `}
          </Script>

          {/* Event Tracking for Calendly Link */}
          <Script id="calendly-tracking" strategy="afterInteractive">
            {`
      window.addEventListener('click', function(e) {
        if (e.target.closest('[href*="calendly.com/mohammad-aqd6/30min"]')) {
          gtag('event', 'conversion', {
            'send_to': 'AW-16679291614/7FEqCOLSus0ZEN6Vp5E-'
          });
        }
      }, true);
    `}
          </Script>
        </>
      )}
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
