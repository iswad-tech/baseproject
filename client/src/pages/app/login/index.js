import React from 'react';

import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import Login from '@/components/AppPages/Login';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={['Public']}>
      <Seo>
        <PageContainer
          pageIdentifier="login"
          hasHeader={false}
          hasFooter={false}
          hasStickyHeader={false}
          hasStickyFooter={false}>
          <Login />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
