import React, { useState } from "react";
import cx from 'classnames';
import { Card, Div, Heading } from 'basedesign-iswad';

import PublicRoute from '@/components/RouteHandlers/PublicRoute';
import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import Home from '@/components/PublicWebPages/Home';
import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV } from 'config';
import InputWithButton from "@/baseComponents/FormComps/InputWithButton";
import BlogInfo from "@/baseComponents/ReusableComps/Card/subs/BlogInfo";
import Anchor from "@/baseComponents/ReusableComps/Anchor";

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={IS_STAGING_ENV ? [USER_GROUPS.APP_ADMIN] : ['Public']}>
      <Seo>
        <PageContainer
          hasHeader={true}
          hasFooter={true}
          hasStickyHeader={false}
          hasStickyFooter={false}>
         <div>
         <Div className="p-all-temp-7 text-primary f-s-px-40 ">Latest Read</Div>
         <a href="#" className="p-all-temp-7 text-primary">Learn More Here.</a>
         </div>
        
        <div className="p-all-temp-7">
        <p>John Smith | June 1, 2024</p>
        </div>
        <Heading className="p-all-temp-7 text-primary f-s-px-20">Title of Blog Post Goes Here.</Heading>
        <p className="p-all-temp-7">Description of blog post will go here. Description of blog post will go here. Description of blog post will go here.</p>
        <Anchor anchorType="primary" className="mx2 p-all-temp-7" to="/">
        Read More
        </Anchor>
        <Div    
        className="p-all-temp-7 bg-theme-one text-secondary text-center width-px-1550">
        Stay in the Loop
        <div className="text-primary">Subscribe to our Blog updates</div>
        
        <InputWithButton>
        </InputWithButton>
        </Div>
        

        <BlogInfo>
          
        </BlogInfo>
        </PageContainer>
        
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
