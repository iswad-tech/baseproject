import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';
import Button from '@/baseComponents/ReusableComps/Button';
import Pagination from '@/baseComponents/ReusableComps/Pagination';

import { CASE_STUDIES } from '@/constants/caseStudies';
import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from './Cases.module.scss';

const Cases = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageProjects, setPageProjects] = useState([]);

  useEffect(() => {
    const firstItem = (currentPage - 1) * 6;
    const lastItem = currentPage * 6;
    setPageProjects([...CASE_STUDIES?.slice(firstItem, lastItem)]);
    window.scrollTo(0, 0);
  }, [currentPage, CASE_STUDIES]);
  return (
    <>
      <Div className="f-s-large global-font-title text-center f-b height-px-40">All Projects</Div>
      <Div className="global-grid global-grid--cols--auto--2">
        {pageProjects?.length
          ? pageProjects?.map((item, idx) => (
              <Div key={idx} className="width-px-300 m-b-temp-4 m-r-temp-4 m-l-temp-4">
                <Card
                  type={CARD_TYPES.caseStudy}
                  title={item?.title}
                  src={item?.src}
                  imgAlt={item?.imgAlt}
                  slug={item?.slug}
                />
              </Div>
            ))
          : [1, 2, 3, 4, 5, 6]?.map((item, idx) => (
              <Div key={idx} className="width-px-350 m-b-temp-7 m-r-temp-7 m-l-temp-7">
                <Card type={CARD_TYPES.caseStudy} title={''} src={''} imgAlt={''} slug={'/'} />
              </Div>
            ))}
      </Div>
      <Div type="flex" hAlign="center" className="m-t-temp-7">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          numberOfTotalPages={2}
        />
      </Div>

      {/* <Div className="max-width-px-250 width-per-100 m-l-auto m-r-auto">
        <Button>View All</Button>
      </Div> */}
    </>
  );
};

export default Cases;
