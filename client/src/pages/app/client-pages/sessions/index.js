import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import Sessions from '@/components/AppPages/Client/Sessions';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={[USER_GROUPS.CLIENT]}>
      <Seo>
        <PageContainer
          pageIdentifier="sessions"
          pageDashboardIdentifier="sessions"
          hasHeader={true}
          hasFooter={false}
          hasStickyHeader={false}
          hasStickyFooter={false}
          hasFooterNavInMobile
          hasSideBarDashboard
          isAppPage>
          <Sessions />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
