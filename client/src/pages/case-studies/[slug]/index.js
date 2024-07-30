import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import WebPageContainer from '@/components/PageWrappers/WebPageContainer';
import CaseStudyDetail from '@/components/PublicWebPages/CaseStudyDetail';

import { CASE_STUDIES } from '@/constants/caseStudies';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = ({ caseStudy }) => {
  return (
    <RoleBasedRoute hasAccessRole={IS_STAGING_ENV ? [USER_GROUPS.APP_ADMIN] : ['Public']}>
      <Seo
        title={`${caseStudy?.title} | ISWAD`}
        description={caseStudy?.metaDescription}
        keywords={caseStudy?.metaKeyWords}>
        <WebPageContainer pageIdentifier="case-studies">
          {Object.keys(caseStudy)?.length ? (
            <CaseStudyDetail caseStudy={caseStudy} />
          ) : (
            <Div>Not Found</Div>
          )}
        </WebPageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  const foundRes = CASE_STUDIES?.filter((item) => item?.slug === slug)?.[0];
  if (foundRes) {
    return { props: { caseStudy: foundRes } };
  }
  return { props: { caseStudy: {} } };
}

export default Index;
