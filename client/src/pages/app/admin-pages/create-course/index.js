import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/RouteHandlers/PublicRoute';
import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import CreateCourse from '@/components/AppPages/Admin/CreateCourse';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={[USER_GROUPS.APP_ADMIN]}>
      <Seo>
        <PageContainer
          pageIdentifier="admin-courses"
          pageDashboardIdentifier="admin-courses"
          hasHeader={true}
          hasFooter={false}
          hasStickyHeader={false}
          hasStickyFooter={false}
          hasFooterNavInMobile
          hasSideBarDashboard
          isAppPage>
          <CreateCourse />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
