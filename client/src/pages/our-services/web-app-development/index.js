import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import WebPageContainer from '@/components/PageWrappers/WebPageContainer';
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
        <WebPageContainer pageIdentifier="our-services">
          <AppDevelopment />
        </WebPageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
