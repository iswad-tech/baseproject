import React, { useEffect } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './CaseStudyDetail.module.scss';

const CaseStudyDetail = ({ caseStudy }) => {
  useEffect(() => {
    console.log(caseStudy);
  }, [caseStudy]);

  return (
    <>
      <Div>CaseStudyDetail</Div>
    </>
  );
};

export default CaseStudyDetail;
