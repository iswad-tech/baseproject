import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';

import { CARD_TYPES } from '@/constants/devDesignVars';

import { TEAM_MEMBERS } from '../../constants';
import styles from './Team.module.scss';

const Team = () => {
  return (
    <>
      <Div className="bg-gray-bright p-all-temp-7">
        <Div className="global-container">
          <Heading type={4} className="text-center p-y-temp-10">
            Meet The Team
          </Heading>
          <Div type="flex" hAlign="center" className="flex--wrap">
            {TEAM_MEMBERS?.map((item, idx) => (
              <Div key={idx} className="width-px-300 m-all-temp-7">
                <Card
                  type={CARD_TYPES.aboutTeam}
                  src={item?.src}
                  imgAlt={item?.imgAlt}
                  name={item?.name}
                  role={item?.role}
                  description={item?.description}
                />
              </Div>
            ))}
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Team;
