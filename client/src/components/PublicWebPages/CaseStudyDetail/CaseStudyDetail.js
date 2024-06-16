import React, { useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Button from '@/baseComponents/ReusableComps/Button';
import Anchor from '@/baseComponents/ReusableComps/Anchor';

import { PAGE_ROUTES } from '@/constants/vars';
import { ANCHOR_TYPES } from '@/constants/devDesignVars';

import Hero from './subs/Hero';
import Description from './subs/Description';
import styles from './CaseStudyDetail.module.scss';

const CaseStudyDetail = ({ caseStudy }) => {
  return (
    <>
      {caseStudy?.detailSrc ? <Hero src={caseStudy?.detailSrc} title={caseStudy?.title} /> : ''}
      <Description scopes={caseStudy?.scopes} />
      <Div className="m-y-temp-7 width-px-200 m-l-auto m-r-auto">
        <Anchor to={PAGE_ROUTES.CASE_STUDIES} anchorType={ANCHOR_TYPES.noEffect}>
          <Button>View All Projects</Button>
        </Anchor>
      </Div>
    </>
  );
};

export default CaseStudyDetail;
