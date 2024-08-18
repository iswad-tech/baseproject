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
  const [curNumberOfBlogsInPage, setCurNumberOfBlogsInPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [curContent, setCurContent] = useState('');
  const [curTag, setCurTag] = useState('All Tags');
  const [curCat, setCurCat] = useState('All Categories');
  const [filter, setFilter] = useState({
    title: '',
    content: '',
    excerpt: '',
    tag: '',
    category: ''
  });

  useEffect(() => {
    if (curTag) {
      const localFilter = { ...filter };
      if (curTag !== 'All Tags') {
        localFilter['tag'] = curTag;
      } else {
        localFilter['tag'] = '';
      }
      setFilter({ ...localFilter });
    }
  }, [curTag]);

  useEffect(() => {
    if (curCat) {
      const localFilter = { ...filter };
      if (curCat !== 'All Categories') {
        localFilter['category'] = curCat;
      } else {
        localFilter['category'] = '';
      }
      setFilter({ ...localFilter });
    }
  }, [curCat]);

  useEffect(() => {
    const localFilter = { ...filter };
    if (curContent) {
      localFilter['content'] = curContent;
    } else {
      localFilter['content'] = '';
    }
    const timeoutId = setTimeout(() => {
      setFilter({ ...localFilter });
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [curContent]);

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
    if (!curNumberOfBlogsInPage) {
      setCurNumberOfBlogsInPage(numberOfBlogsInPage);
    }
    if (curNumberOfBlogs % curNumberOfBlogsInPage === 0) {
      setNumberOfPages(curNumberOfBlogs / curNumberOfBlogsInPage);
    } else {
      setNumberOfPages(parseInt(curNumberOfBlogs / curNumberOfBlogsInPage) + 1);
    }
  }, [curNumberOfBlogs, curNumberOfBlogsInPage, numberOfBlogsInPage]);
  // --------------------------------------------------------
  // --------------------------------------------------------
  const [sendGetBlogReq, setSendGetBlogReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: sendGetBlogReq,
    setSendReq: setSendGetBlogReq,
    method: 'GET',
    url: `${BLOG_API_ROUTE}?page_number=${currentPage}&filter=${JSON.stringify(filter)}`
  });
  useEffect(() => {
    if (data?.blogs) {
      setCurBlogs(data.blogs);
      setCurNumberOfBlogs(data?.number_of_blogs);
      setCurNumberOfBlogsInPage(data?.number_of_blogs_in_page);
    }
  }, [data]);
  useEffect(() => {
    setSendGetBlogReq(true);
  }, [currentPage, filter]);
  // --------------------------------------------------------
  // --------------------------------------------------------

  return (
    <>
      <Div>
        <Div className="m-y-100 global-container add-p-x-in-desktop">
          <LatestRead featuredBlogs={featuredBlogs} />
        </Div>
        <Div className="global-container m-y-100">
          <FilterBlog
            curTag={curTag}
            curCat={curCat}
            setCurTag={setCurTag}
            setCurCat={setCurCat}
            curContent={curContent}
            setCurContent={setCurContent}
          />
        </Div>
        <Div className="global-container add-p-x-in-desktop m-b-100">
          <Posts
            curBlogs={curBlogs}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            numberOfPages={numberOfPages}
          />
        </Div>
        <Div className="">
          <StayInTheLoop />
        </Div>
      </Div>
    </>
  );
};

export default Blog;
