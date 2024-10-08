import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/RouteHandlers/PublicRoute';
import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import CreateBlog from '@/components/AppPages/Admin/CreateBlog';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={[USER_GROUPS.APP_ADMIN, USER_GROUPS.BLOG_WRITER]}>
      <Seo>
        <PageContainer
          pageIdentifier="admin-blogs"
          pageDashboardIdentifier="admin-blogs"
          hasHeader={true}
          hasFooter={false}
          hasStickyHeader={false}
          hasStickyFooter={false}
          hasFooterNavInMobile
          hasSideBarDashboard
          isAppPage>
          <CreateBlog />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
