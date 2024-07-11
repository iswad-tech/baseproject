import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/RouteHandlers/PublicRoute';
import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import CaseStudies from '@/components/PublicWebPages/CaseStudies';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={IS_STAGING_ENV ? [USER_GROUPS.APP_ADMIN] : ['Public']}>
      <Seo
        title="Case Studies | ISWAD"
        description="Explore ISWAD Tech's Case Studies to see how we've helped businesses achieve success. Discover real-world examples of our expertise in MVP development, web app creation, branding, and more. Learn how our innovative solutions and tailored strategies can drive growth and transformation for your business."
        keywords="Case Studies, Client Success Stories, Project Highlights, Tech Solutions, Business Transformation, Innovative Projects, Success Stories, Client Projects, Real-World Solutions, Industry Case Studies">
        <PageContainer
          pageIdentifier="case-studies"
          hasHeader={true}
          hasFooter={true}
          hasStickyHeader={false}
          hasStickyFooter={false}>
          <CaseStudies />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
