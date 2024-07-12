import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import { useRouter } from 'next/router';

import AppImage from '@/baseComponents/ReusableComps/AppImage';
import Button from '@/baseComponents/ReusableComps/Button';

import styles from '../Card.module.scss';
import { PAGE_ROUTES } from '@/constants/vars';

const CaseStudy = ({ title = '', src = '', slug = '/', imgAlt = 'Case Study By ISWAD' }) => {
  const router = useRouter();

  return (
    <>
      <Div className="width-per-100 bg-white br-rad-3xl of-hidden p-all-temp-7 box-shadow-type-two">
        <Div className="text-black  f-s-px-28 two-lines m-b-temp-7">{title}</Div>
        <Div className="m-all-temp-2">
          <AppImage src={src} objectFit="cover" className="br-rad-px-20" alt={imgAlt} />
        </Div>

        <Div>
          <Button onClick={() => router.push(`${PAGE_ROUTES.CASE_STUDIES}/${slug}`)}>View</Button>
        </Div>
      </Div>
    </>
  );
};

export default CaseStudy;
