import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import DivMinFullHeight from '@/baseComponents/ReusableComps/DivMinFullHeight';
import PublicRoute from '@/components/RouteHandlers/PublicRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import NotFound from '@/components/PublicWebPages/NotFound';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <NotFound />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
