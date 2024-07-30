import React, { useEffect } from 'react';
import axios from 'axios';

import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import WebPageContainer from '@/components/PageWrappers/WebPageContainer';
import Home from '@/components/PublicWebPages/Home';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV, APP_DOMAIN_FOR_SERVER_SIDE_PROPS } from 'config';
import { BLOG_API_ROUTE } from '@/constants/apiRoutes';

const Index = ({ popularBlogs }) => {
  return (
    <>
      <RoleBasedRoute hasAccessRole={IS_STAGING_ENV ? [USER_GROUPS.APP_ADMIN] : ['Public']}>
        <Seo
          title={`Home | ISWAD`}
          description="Discover cutting-edge MVP development with ISWAD Tech. We specialize in creating cost-effective, user-centric web and mobile applications for startups and SMEs. Accelerate your time-to-market, minimize risks, and ensure continuous improvement with our expert solutions. Unlock your business potential today."
          keywords="AI Solutions, Artificial Intelligence, Data Analysis, Machine Learning, Custom Software Development, Mobile App Development, Web App Development, MVP Development, SaaS Solutions, API Integration, Technology Consultancy, Digital Transformation, Business Automation, Tech Innovation, Scalable Tech Solutions, Customer Experience, Innovative Technology Services, Data-Driven Insights, Future of Technology, Tech-Driven Growth">
          <WebPageContainer pageIdentifier="home">
            <Home popularBlogs={popularBlogs} />
          </WebPageContainer>
        </Seo>
      </RoleBasedRoute>
    </>
  );
};

export async function getServerSideProps(context) {
  const BlogsApiRoute = `${APP_DOMAIN_FOR_SERVER_SIDE_PROPS}${BLOG_API_ROUTE}`;

  let popularBlogs = [];

  try {
    const popularBlogsData = await axios.get(BlogsApiRoute, {
      params: {
        is_popular_posts: 1
      }
    });
    if (popularBlogsData?.data?.blogs) {
      popularBlogs = popularBlogsData.data.blogs;
    }
    return {
      props: { popularBlogs }
    };
  } catch (err) {
    console.log(err);
    return { props: { popularBlogs: [] } };
  }
}

export default Index;
