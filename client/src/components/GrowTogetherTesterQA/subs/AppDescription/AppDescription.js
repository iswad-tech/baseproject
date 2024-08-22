import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import Button from '@/baseComponents/ReusableComps/Button';
import Paragraph from '@/baseComponents/ReusableComps/Paragraph';
import List from '@/baseComponents/ReusableComps/List';

import styles from './AppDescription.module.scss';

const AppDescription = () => {
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        className="max-width-px-700 width-per-100 p-x-16 m-l-auto m-r-auto">
        <Heading className="m-y-temp-14 m-x-16 text-center" type={3}>
          Join the GrowTogether Early Tester Program!
        </Heading>
        <Heading className="m-b-temp-14 m-x-16 text-center" type={6}>
          Help shape the future of collaborative learning and gain exclusive benefits.
        </Heading>
        <Div type="flex" hAlign="center" className="">
          <Button className="width-px-200">Sign Up Now</Button>
        </Div>
        <Div type="flex" hAlign="center" className="p-x-16 m-y-temp-14">
          <Paragraph className="max-width-px-700 width-per-100">
            GrowTogether is an innovative platform designed to bring tech professionals together to
            turn ideas into reality. As an early tester, you’ll play a key role in shaping the
            platform’s future while gaining exclusive benefits and access.
          </Paragraph>
        </Div>

        <Heading className="m-b-temp-7 m-x-16 text-center" type={3}>
          Benefits of Becoming an Early Tester:
        </Heading>

        <Div className="">
          <List
            list={[
              'Influence the development of GrowTogether.',
              'Enjoy exclusive discounts on future app usage.',
              'Gain hands-on experience with a new platform.',
              'Network with other tech professionals.',
              'Receive ongoing support and resources during the testing phase.'
            ]}
          />
        </Div>
      </Div>
    </>
  );
};

export default AppDescription;
