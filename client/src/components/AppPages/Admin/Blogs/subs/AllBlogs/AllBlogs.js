import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/ReusableComps/Card';
import Pagination from '@/baseComponents/ReusableComps/Pagination';

import useApiCalls from '@/hooks/useApiCalls';
import { BLOG_API_ROUTE } from '@/constants/apiRoutes';
import { APP_DOMAIN_FOR_SERVER_SIDE_PROPS } from 'config';
import moment from '@/utils/moment';
import { DATE_FORMAT } from '@/constants/vars';
import { CARD_TYPES } from '@/constants/devDesignVars';

import styles from './AllBlogs.module.scss';

const AllBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [curBlogs, setCurBlogs] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);

  // --------------------------------------------------------
  // --------------------------------------------------------
  const [sendGetBlogReq, setSendGetBlogReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: sendGetBlogReq,
    setSendReq: setSendGetBlogReq,
    method: 'GET',
    url: `${BLOG_API_ROUTE}?${new URLSearchParams({
      page_number: currentPage,
      is_published: 0
    })}`
  });
  useEffect(() => {
    if (data?.blogs) {
      setCurBlogs(data.blogs);
    }
    if (data?.number_of_blogs && data?.number_of_blogs_in_page) {
      if (data.number_of_blogs % data.number_of_blogs_in_page === 0) {
        setNumberOfPages(data.number_of_blogs / data.number_of_blogs_in_page);
      } else {
        setNumberOfPages(parseInt(data.number_of_blogs / data.number_of_blogs_in_page) + 1);
      }
    }
  }, [data]);

  useEffect(() => {
    setSendGetBlogReq(true);
  }, [currentPage]);
  // --------------------------------------------------------
  // --------------------------------------------------------

  return (
    <>
      <Div className="global-grid global-grid--cols--auto">
        {curBlogs?.map((item, idx) => (
          <Div key={idx} className="width-px-300">
            <Card
              type={CARD_TYPES.blogInfo}
              // src={`${APP_DOMAIN_FOR_SERVER_SIDE_PROPS}/${item?.preview_photo}`}
              src={item?.preview_photo}
              writer={item?.writer?.user?.first_name}
              postDate={moment(item?.created_at).format(DATE_FORMAT)}
              title={item?.title}
              slug={item?.slug}
              description={item?.excerpt}
              moreInfoUrl={item?.slug}
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

export default AllBlogs;
