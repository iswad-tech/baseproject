import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import WebPageContainer from '@/components/PageWrappers/WebPageContainer';
import MvpDevelopment from '@/components/PublicWebPages/Services/MvpDevelopment';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={IS_STAGING_ENV ? [USER_GROUPS.APP_ADMIN] : ['Public']}>
      <Seo
        title={`MVP Development | ISWAD`}
        description="Explore ISWAD Tech's MVP Development services. We craft minimal viable products to help startups and SMEs quickly validate ideas, gather user feedback, and refine their solutions. Accelerate your product development with our expert team and innovative strategies. Unlock business growth with ISWAD Tech."
        keywords="MVP Development, Minimum Viable Product, Startup MVP, Rapid Prototyping, Product Validation, Lean Startup, MVP Consultancy, Product Development, Early Stage Product, MVP Strategy">
        <WebPageContainer pageIdentifier="our-services" pageSubNavIdentifier="mvp-development">
          <MvpDevelopment />
        </WebPageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
