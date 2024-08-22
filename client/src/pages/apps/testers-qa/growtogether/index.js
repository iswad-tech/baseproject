import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import WebPageContainer from '@/components/PageWrappers/WebPageContainer';
import GrowTogetherTesterQA from '@/components/GrowTogetherTesterQA';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={IS_STAGING_ENV ? [USER_GROUPS.APP_ADMIN] : ['Public']}>
      <Seo
        title={`GrowTogether | ISWAD`}
        description="Be a part of GrowTogether, the innovative platform by ISWAD Tech that empowers tech enthusiasts and professionals. Join as an early tester to shape the future of collaborative learning, gain exclusive benefits, and work on real-world projects with expert guidance. Register today to contribute and grow together!"
        keywords="GrowTogether, Collaborative Learning, Early Tester Program, Tech Community, Developer Community, SaaS Founders, Project Management, UI/UX Design, Web Development, App Development, Tech Mentorship, Team Collaboration, Professional Growth, ISWAD Tech, Real-World Projects, Platform Development, Tech Innovation, Networking Opportunities, Tech Startup, Career Development, Mentorship Program, Collaborative Platform">
        <WebPageContainer pageIdentifier="apps">
          <GrowTogetherTesterQA />
        </WebPageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
