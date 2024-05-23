import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import RoleBasedRoute from '@/components/RoleBasedRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

import styles from './Index.module.scss';

const Index = () => {
  return (
    <PageContainer
      pageIdentifier="case-studies"
      hasHeader={true}
      hasFooter={false}
      hasStickyHeader={false}
      hasStickyFooter={false}>
      <Div>Case Studies</Div>
    </PageContainer>
  );
};

export default Index;
