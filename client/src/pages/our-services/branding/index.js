import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import WebPageContainer from '@/components/PageWrappers/WebPageContainer';
import Branding from '@/components/PublicWebPages/Services/Branding';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={IS_STAGING_ENV ? [USER_GROUPS.APP_ADMIN] : ['Public']}>
      <Seo
        title={`Branding | ISWAD`}
        description="Enhance your brand with ISWAD Tech's expert Branding services. We create unique, compelling brand identities that resonate with your audience and drive engagement. From logo design to full brand strategy, trust ISWAD Tech to elevate your brand's presence and impact. Transform your brand with us today."
        keywords="Branding Services, Brand Strategy, Brand Identity, Logo Design, Visual Branding, Brand Development, Rebranding, Corporate Branding, Brand Consulting, Digital Branding">
        <WebPageContainer pageIdentifier="our-services">
          <Branding />
        </WebPageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
