import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';
import Button from '@/baseComponents/ReusableComps/Button';

import { CASE_STUDIES } from '@/constants/caseStudies';
import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from './MostPopular.module.scss';

const MostPopular = () => {
  const [popularProjs, setPopularProjs] = useState([]);

  useEffect(() => {
    const localPopularProjs = [];
    CASE_STUDIES?.forEach((item) => {
      if (item?.isMostPopular) {
        localPopularProjs.push({ ...item });
      }
      setPopularProjs([...localPopularProjs]);
    });
  }, [CASE_STUDIES]);

  return (
    <>
      <Div className="f-s-large global-font-title text-center f-b m-b-temp-14">
        Our Most Popular
      </Div>
      <Div type="flex" hAlign="center" className="flex--wrap m-b-temp-14">
        {popularProjs?.map((item, idx) => (
          <Div key={idx} className="max-width-px-350 m-b-temp-7 m-r-temp-7 m-l-temp-7">
            <Card type={CARD_TYPES.caseStudy} title={item?.title} src={item?.src} />
          </Div>
        ))}
      </Div>
      <Div className="max-width-px-250 width-per-100 m-l-auto m-r-auto">
        <Button>View All</Button>
      </Div>
    </>
  );
};

export default MostPopular;
