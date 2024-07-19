import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/RouteHandlers/PublicRoute';
import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import Home from '@/components/PublicWebPages/Home';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = () => {
  return (
    <RoleBasedRoute
      hasAccessRole={[USER_GROUPS.APP_ADMIN, USER_GROUPS.BLOG_WRITER, USER_GROUPS.CLIENT]}>
      <Seo>
        <PageContainer
          pageIdentifier="dashboard"
          pageDashboardIdentifier="dashboard"
          hasHeader={true}
          hasFooter={false}
          hasStickyHeader={false}
          hasStickyFooter={false}
          hasFooterNavInMobile
          hasSideBarDashboard
          isAppPage>
          <Div>Dashoboard</Div>
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
