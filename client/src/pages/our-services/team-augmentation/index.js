import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/RouteHandlers/PublicRoute';
import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import TeamAugmentation from '@/components/PublicWebPages/Services/TeamAugmentation';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={IS_STAGING_ENV ? [USER_GROUPS.APP_ADMIN] : ['Public']}>
      <Seo
        title={`Team Augmentation | ISWAD`}
        description="Boost your team's capabilities with ISWAD Tech's Team Augmentation services. Access top talent and expertise to accelerate your projects and achieve your business goals. Flexible and scalable solutions tailored to your needs. Enhance productivity and drive growth with ISWAD Tech."
        keywords="Team Augmentation, Staff Augmentation, IT Staffing, Remote Team, Dedicated Developers, Tech Talent, Agile Team, IT Outsourcing, Flexible Workforce, On-Demand Talent">
        <PageContainer
          pageIdentifier="our-services"
          pageSubNavIdentifier="team-augmentation"
          hasHeader={true}
          hasFooter={true}
          hasStickyHeader={false}
          hasStickyFooter={false}>
          <TeamAugmentation />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
