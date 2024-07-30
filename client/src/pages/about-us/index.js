import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import WebPageContainer from '@/components/PageWrappers/WebPageContainer';
import About from '@/components/PublicWebPages/About';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={IS_STAGING_ENV ? [USER_GROUPS.APP_ADMIN] : ['Public']}>
      <Seo
        title="About Us | ISWAD"
        description="Learn about ISWAD Tech, a leading provider of innovative technology solutions. Discover our mission, vision, and values, meet our expert team, and understand our commitment to driving digital transformation and business growth for clients across various industries."
        keywords="About ISWAD Tech, Our Mission, Our Vision, Company Values, Tech Innovators, Our Team, Tech Leadership, Company History, What We Do, Our Story">
        <WebPageContainer pageIdentifier="about-us">
          <About />
        </WebPageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
