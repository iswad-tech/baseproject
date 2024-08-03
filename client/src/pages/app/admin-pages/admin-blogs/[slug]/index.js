import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/RouteHandlers/PublicRoute';
import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import BlogEdit from '@/components/AppPages/Admin/BlogEdit';
import { useRouter } from 'next/router';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = () => {
  const router = useRouter();

  const { slug } = router.query;
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
          <BlogEdit slug={slug} />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
