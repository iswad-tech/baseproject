import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import Projects from '@/components/AppPages/Client/Projects';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={[USER_GROUPS.CLIENT]}>
      <Seo>
        <PageContainer
          pageIdentifier="courses"
          pageDashboardIdentifier="courses"
          hasHeader={true}
          hasFooter={false}
          hasStickyHeader={false}
          hasStickyFooter={false}
          hasFooterNavInMobile
          hasSideBarDashboard
          isAppPage>
          <Projects />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
