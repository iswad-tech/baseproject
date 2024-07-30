import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import moment from '@/utils/moment';
import { DATE_FORMAT } from '@/constants/vars';

import styles from './DetailSideBar.module.scss';

const DetailSideBar = ({ blog }) => {
  console.log(blog);
  return (
    <>
      <Div className="">
        <Div className="m-b-temp-7">
          <Div className="m-b-16 text-theme-one">Written By:</Div>
          <Div type="flex" className="text-gray-dark">
            {blog?.writer?.user?.first_name} {blog?.writer?.user?.last_name}
          </Div>
        </Div>

        <Div className="m-b-temp-7">
          <Div className="m-b-16 text-theme-one">Updated At:</Div>
          <Div type="flex" className="text-gray-dark">
            {moment(blog?.updated_at).format(DATE_FORMAT)}
          </Div>
        </Div>

        <Div className="m-b-temp-7">
          <Div className="m-b-16 text-theme-one">Category:</Div>
          <Div type="flex">
            {blog?.labels?.categories?.map((item, idx) => (
              <Div key={idx} className="bg-gray-dark text-white p-all-8 br-rad-sm m-r-4 m-b-4">
                {item}
              </Div>
            ))}
          </Div>
        </Div>

        <Div className="m-b-temp-7">
          <Div className="m-b-16 text-theme-one">Tags:</Div>
          <Div type="flex">
            {blog?.labels?.tags?.map((item, idx) => (
              <Div key={idx} className="bg-gray-dark text-white p-all-8 br-rad-sm m-r-4 m-b-4">
                {item}
              </Div>
            ))}
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default DetailSideBar;
