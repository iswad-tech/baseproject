import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';
import Pagination from '@/baseComponents/ReusableComps/Pagination';

import useApiCalls from '@/hooks/useApiCalls';
import { COURSE_API_ROUTE } from '@/constants/apiRoutes';
import { APP_DOMAIN_FOR_SERVER_SIDE_PROPS } from 'config';
import moment from '@/utils/moment';
import { DATE_FORMAT } from '@/constants/vars';
import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from './AllCourses.module.scss';

const AllCourses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [curCourses, setCurCourses] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);

  // --------------------------------------------------------
  // --------------------------------------------------------
  const [sendGetCourseReq, setSendGetCourseReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: sendGetCourseReq,
    setSendReq: setSendGetCourseReq,
    method: 'GET',
    url: `${COURSE_API_ROUTE}?${new URLSearchParams({
      page_number: currentPage,
      is_published: 0
    })}`
  });
  useEffect(() => {
    if (data?.courses) {
      setCurCourses(data.courses);
    }
    if (data?.number_of_courses && data?.number_of_courses_in_page) {
      if (data.number_of_courses % data.number_of_courses_in_page === 0) {
        setNumberOfPages(data.number_of_courses / data.number_of_courses_in_page);
      } else {
        setNumberOfPages(parseInt(data.number_of_courses / data.number_of_courses_in_page) + 1);
      }
    }
  }, [data]);

  useEffect(() => {
    setSendGetCourseReq(true);
  }, [currentPage]);
  // --------------------------------------------------------
  // --------------------------------------------------------

  return (
    <>
      <Div className="global-grid global-grid--cols--auto">
        {curCourses?.map((item, idx) => (
          <Div key={idx} className="width-px-350">
            <Card
              type={CARD_TYPES.clientCourse}
              src={`${APP_DOMAIN_FOR_SERVER_SIDE_PROPS}/${item?.preview_photo}`}
              hours={item?.training_hours}
              price={item?.price}
              title={item?.title}
              description={item?.excerpt}
              slug={item?.slug}
              isAdminPage
            />
          </Div>
        ))}
      </Div>
      <Div type="flex" hAlign="center" className="m-t-temp-14">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          numberOfTotalPages={numberOfPages}
        />
      </Div>
    </>
  );
};

export default AllCourses;
