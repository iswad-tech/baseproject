import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import useApiCalls from '@/hooks/useApiCalls';
import { BLOG_API_ROUTE } from '@/constants/apiRoutes';

import LatestRead from './subs/LatestRead/LatestRead';
import StayInTheLoop from './subs/StayInTheLoop/StayInTheLoop';
import FilterBlog from './subs/FilterBlog/FilterBlog';
import Posts from './subs/Posts';
import styles from './Blog.module.scss';

const Blog = ({ blogs, featuredBlogs, numberOfBlogs, numberOfBlogsInPage }) => {
  const [curBlogs, setCurBlogs] = useState([]);
  const [curNumberOfBlogs, setCurNumberOfBlogs] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);

  // ----------------------------------------------
  // Set current blogs and number of pages for pagination
  // ----------------------------------------------

  useEffect(() => {
    if (blogs?.length) {
      setCurBlogs([...blogs]);
    }
  }, [blogs]);

  useEffect(() => {
    if (numberOfBlogs) {
      setCurNumberOfBlogs(numberOfBlogs);
    }
  }, [numberOfBlogs]);

  useEffect(() => {
    if (curNumberOfBlogs % numberOfBlogsInPage === 0) {
      setNumberOfPages(curNumberOfBlogs / numberOfBlogsInPage);
    } else {
      setNumberOfPages(parseInt(curNumberOfBlogs / numberOfBlogsInPage) + 1);
    }
  }, [curNumberOfBlogs, numberOfBlogsInPage]);
  // --------------------------------------------------------
  // --------------------------------------------------------
  const [sendGetBlogReq, setSendGetBlogReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: sendGetBlogReq,
    setSendReq: setSendGetBlogReq,
    method: 'GET',
    url: `${BLOG_API_ROUTE}?page_number=${currentPage}`
  });
  useEffect(() => {
    if (data?.blogs) {
      setCurBlogs(data.blogs);
    }
  }, [data]);
  useEffect(() => {
    setSendGetBlogReq(true);
  }, [currentPage]);
  // --------------------------------------------------------
  // --------------------------------------------------------

  return (
    <>
      <Div>
        <Div className="m-y-100 global-container add-p-x-in-desktop">
          <LatestRead featuredBlogs={featuredBlogs} />
        </Div>
        <Div className="">
          <StayInTheLoop />
        </Div>
        {/* <Div className="global-container">
          <FilterBlog />
        </Div> */}
        <Div className="global-container add-p-x-in-desktop m-y-100">
          <Posts
            curBlogs={curBlogs}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            numberOfPages={numberOfPages}
          />
        </Div>
      </Div>
    </>
  );
};

export default Blog;
