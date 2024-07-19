import React from 'react';

import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import ActivateUser from '@/components/AppPages/ActivateUser';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={['Public']}>
      <Seo>
        <PageContainer
          pageIdentifier="activate-user"
          hasHeader={false}
          hasFooter={false}
          hasStickyHeader={false}
          hasStickyFooter={false}>
          <ActivateUser />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
