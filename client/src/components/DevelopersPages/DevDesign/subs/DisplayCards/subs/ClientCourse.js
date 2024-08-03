import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from '../../../DevDesign.module.scss';

const ClientCourse = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="m-b-32 width-px-350"
        {...props}>
        <Div className="m-b-8">Type: {CARD_TYPES.clientCourse}</Div>
        <Card
          type={CARD_TYPES.clientCourse}
          src={'https://picsum.photos/300'}
          hours={10}
          title="Front End Development Basics"
          description={`Description of blog post will go here. Description of blog post will go here.
            Description of blog post will go here. Description of blog post will go here.`}
          price={2400}
          moreInfoUrl=""
        />
      </Div>
    </>
  );
};

export default ClientCourse;
