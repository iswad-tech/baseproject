import React from 'react';
import cx from 'classnames';
import { Div, Row, Column } from 'basedesign-iswad';

import Search from '@/baseComponents/ReusableComps/Search';
import Select from '@/baseComponents/FormComps/Select';

import styles from './FilterBlog.module.scss';

const FilterBlog = () => {
  return (
    <>
      <Div className={cx('bg-white box-shadow-type-one p-x-temp-7 p-y-temp-7', styles.container)}>
        <Row>
          <Column xs={12} sm={12} md={4} lg={4}>
            <Div className={cx('width-per-100 p-x-8 global-add-margin-bottom-in-mobile ')}>
              <Search closable={false} />
            </Div>
          </Column>
          <Column xs={12} sm={12} md={4} lg={4}>
            <Div
              type="flex"
              vAlign="center"
              className="width-per-100 p-x-8 global-add-margin-bottom-in-mobile ">
              <Select className="width-per-100" hasMarginBottom={false} />
            </Div>
          </Column>
          <Column xs={12} sm={12} md={4} lg={4}>
            <Div type="flex" vAlign="center" className="width-per-100 p-x-8">
              <Select className="width-per-100" hasMarginBottom={false} />
            </Div>
          </Column>
        </Row>
      </Div>
    </>
  );
};

export default FilterBlog;
