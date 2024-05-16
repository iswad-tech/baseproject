import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';
import TemporaryLanding from '@/components/PublicPages/TemporaryLanding';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = () => {
  return (
    <PublicRoute>
      <Seo title="Mohammad Mohajer">
        <PageContainer pageIdentifier="home" hasHeader={false} hasFooter={false}>
          <TemporaryLanding />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
