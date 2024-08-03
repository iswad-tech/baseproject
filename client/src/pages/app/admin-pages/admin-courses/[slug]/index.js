import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import { useRouter } from 'next/router';

import PublicRoute from '@/components/RouteHandlers/PublicRoute';
import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import CourseEdit from '@/components/AppPages/Admin/CourseEdit';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = () => {
  const router = useRouter();

  const { slug } = router.query;
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
          <CourseEdit slug={slug} />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
