import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from '../../../DevDesign.module.scss';

const TemporaryServiceCard = ({ ...props }) => {
  return (
    <>
      <Div
        direction="vertical"
        type="flex"
        hAlign="center"
        vAlign="center"
        className="mb4 max-w-px-350"
        {...props}>
        <Div className="mb1">Type: {CARD_TYPES.temporaryService}</Div>
        <Card
          type={CARD_TYPES.temporaryService}
          title="Customized Web/Mobile App Development"
          explanations={[
            'We offer comprehensive MVP development services, guiding you from ideation to product launch.',
            'With a focus on clear milestones and agile methodology, we ensure efficient and scalable development.',
            'Our team assists with UI/UX design, mobile and web app development, and AI implementation.',
            'Target Audience: Early-stage ideas, teams, investors seeking to invest in their product with a focus on development excellence.'
          ]}
        />
      </Div>
    </>
  );
};

export default TemporaryServiceCard;
