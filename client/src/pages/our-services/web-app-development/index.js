import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/RouteHandlers/PublicRoute';
import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import Home from '@/components/PublicWebPages/Home';
import AppDevelopment from '@/components/PublicWebPages/Services/AppDevelopment';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={IS_STAGING_ENV ? [USER_GROUPS.APP_ADMIN] : ['Public']}>
      <Seo
        title={`Web App Development | ISWAD`}
        description="Discover ISWAD Tech's Web App Development services. We build custom, scalable, and user-friendly web applications tailored to your business needs. Enhance your digital presence and drive growth with our innovative solutions. Partner with ISWAD Tech for cutting-edge web development."
        keywords="Web App Development, Custom Web Applications, Full Stack Development, Responsive Web Design, Progressive Web Apps, E-commerce Solutions, Web Development Services, Frontend Development, Backend Development, Web App Optimization">
        <PageContainer
          pageIdentifier="our-services"
          pageSubNavIdentifier="web-app-development"
          hasHeader={true}
          hasFooter={true}
          hasStickyHeader={false}
          hasStickyFooter={false}>
          <AppDevelopment />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
