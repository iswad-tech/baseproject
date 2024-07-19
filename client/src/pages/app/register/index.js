import React from 'react';

import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import Register from '@/components/AppPages/Register';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={['Public']}>
      <Seo>
        <PageContainer
          pageIdentifier="register"
          hasHeader={false}
          hasFooter={false}
          hasStickyHeader={false}
          hasStickyFooter={false}>
          <Register />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
