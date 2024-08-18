import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div, Row, Column } from 'basedesign-iswad';

import Search from '@/baseComponents/ReusableComps/Search';
import Select from '@/baseComponents/FormComps/Select';

import useApiCalls from '@/hooks/useApiCalls';
import { LABEL_API_ROUTE } from '@/constants/apiRoutes';

import styles from './FilterBlog.module.scss';

const FilterBlog = ({ curTag, curCat, setCurTag, setCurCat, curContent, setCurContent }) => {
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  // --------------------------------------------------------
  // --------------------------------------------------------
  const [sendGetTagsReq, setSendGetTagsReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: sendGetTagsReq,
    setSendReq: setSendGetTagsReq,
    method: 'GET',
    url: `${LABEL_API_ROUTE}?type=tag`,
    showLoading: false
  });
  useEffect(() => {
    if (data?.labels) {
      const localTags = [{ value: 'All Tags', shownText: 'All Tags' }];
      data.labels?.forEach((item) => {
        localTags.push({ value: item?.uuid, shownText: item?.title });
      });
      setTags(localTags);
    }
  }, [data]);
  useEffect(() => {
    setSendGetTagsReq(true);
  }, []);
  // --------------------------------------------------------
  // --------------------------------------------------------

  // --------------------------------------------------------
  // --------------------------------------------------------
  const [sendGetTagReq, setSendGetCatReq] = useState(false);
  const { data: catData, error: catError } = useApiCalls({
    sendReq: sendGetTagReq,
    setSendReq: setSendGetCatReq,
    method: 'GET',
    url: `${LABEL_API_ROUTE}?type=category`,
    showLoading: false
  });
  useEffect(() => {
    if (catData?.labels) {
      const localCats = [{ value: 'All Categories', shownText: 'All Categories' }];
      catData.labels?.forEach((item) => {
        localCats.push({ value: item?.uuid, shownText: item?.title });
      });
      setCategories(localCats);
    }
  }, [catData]);
  useEffect(() => {
    setSendGetCatReq(true);
  }, []);
  // --------------------------------------------------------
  // --------------------------------------------------------

  return (
    <>
      <Div className={cx('bg-white box-shadow-type-one p-x-temp-7 p-y-temp-7', styles.container)}>
        <Row>
          <Column xs={12} sm={12} md={4} lg={4}>
            <Div className={cx('width-per-100 p-x-8 global-add-margin-bottom-in-mobile ')}>
              <Search
                closable={false}
                value={curContent}
                onChange={(e) => setCurContent(e.target.value)}
                placeholder="Search articles..."
              />
            </Div>
          </Column>
          <Column xs={12} sm={12} md={4} lg={4}>
            <Div
              type="flex"
              vAlign="center"
              className="width-per-100 p-x-8 global-add-margin-bottom-in-mobile ">
              <Select
                options={categories}
                val={curCat}
                setVal={setCurCat}
                labelText={''}
                placeHolder="All Categories"
                selectIntialShownText={'Hello'}
                className="width-per-100"
                hasMarginBottom={false}
              />
            </Div>
          </Column>
          <Column xs={12} sm={12} md={4} lg={4}>
            <Div type="flex" vAlign="center" className="width-per-100 p-x-8">
              <Select
                options={tags}
                val={curTag}
                setVal={setCurTag}
                labelText={''}
                placeHolder="All Tags"
                className="width-per-100"
                hasMarginBottom={false}
              />
            </Div>
          </Column>
        </Row>
      </Div>
    </>
  );
};

export default FilterBlog;
