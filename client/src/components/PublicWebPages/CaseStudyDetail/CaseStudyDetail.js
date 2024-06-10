import React, { useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Hero from './subs/Hero';
import Description from './subs/Description';
import styles from './CaseStudyDetail.module.scss';

const CaseStudyDetail = ({ caseStudy }) => {
  useEffect(() => {
    console.log(caseStudy);
  }, [caseStudy]);

  return (
    <>
      {caseStudy?.detailSrc ? <Hero src={caseStudy?.detailSrc} /> : ''}
      <Description scopes={caseStudy?.scopes} />
    </>
  );
};

export default CaseStudyDetail;
