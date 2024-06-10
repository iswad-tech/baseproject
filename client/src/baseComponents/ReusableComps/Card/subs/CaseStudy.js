import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';
import { useRouter } from 'next/router';

import AppImage from '@/baseComponents/ReusableComps/AppImage';
import Button from '@/baseComponents/ReusableComps/Button';

import styles from '../Card.module.scss';
import { PAGE_ROUTES } from '@/constants/vars';

const CaseStudy = ({ title = '', src = '', slug = '/' }) => {
  const router = useRouter();
  return (
    <>
      <Div className="width-per-100 bg-white br-rad-3xl of-hidden p-all-temp-7 box-shadow-type-one">
        <Heading type={4} className="text-black m-b-temp-7 two-lines">
          {title}
        </Heading>
        <Div className="br-rad-3xl of-hidden m-b-temp-7">
          <AppImage src={src} />
        </Div>
        <Div>
          <Button onClick={() => router.push(`${PAGE_ROUTES.CASE_STUDIES}/${slug}`)}>View</Button>
        </Div>
      </Div>
    </>
  );
};

export default CaseStudy;
