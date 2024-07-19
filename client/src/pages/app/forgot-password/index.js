import React from 'react';

import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import ForgotPassword from '@/components/AppPages/ForgotPassword';

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
          <ForgotPassword />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
