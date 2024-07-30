import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import WebPageContainer from '@/components/PageWrappers/WebPageContainer';
import Coaching from '@/components/PublicWebPages/Services/Coaching';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={IS_STAGING_ENV ? [USER_GROUPS.APP_ADMIN] : ['Public']}>
      <Seo
        title={`Counselling | ISWAD`}
        description="Unlock your potential with ISWAD Tech's Counseling services. We offer personalized guidance and support to help businesses overcome challenges and achieve their goals. Benefit from expert advice tailored to your unique needs. Empower your business growth with ISWAD Tech's counseling solutions."
        keywords="Business Counselling, Tech Consultancy, Business Strategy, IT Consulting, Technology Advisory, Startup Mentoring, Business Growth, Strategic Planning, Innovation Consulting, Digital Transformation Consulting">
        <WebPageContainer pageIdentifier="our-services">
          <Coaching />
        </WebPageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
