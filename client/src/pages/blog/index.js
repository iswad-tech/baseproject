import React, { useState } from 'react';
import cx from 'classnames';
import axios from 'axios';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/RouteHandlers/PublicRoute';
import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import Blog from '@/components/PublicWebPages/Blog';
import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV, APP_DOMAIN_FOR_SERVER_SIDE_PROPS } from 'config';
import { BLOG_API_ROUTE } from '@/constants/apiRoutes';

const Index = ({ blogs, featuredBlogs, numberOfBlogs, numberOfBlogsInPage }) => {
  return (
    <RoleBasedRoute hasAccessRole={IS_STAGING_ENV ? [USER_GROUPS.APP_ADMIN] : ['Public']}>
      <Seo
        title="Blog | ISWAD"
        description="Stay updated with ISWAD Tech's Blog. Discover insights, tips, and industry trends on MVP development, web app creation, branding, and more. Our expert articles provide valuable knowledge to help your business grow and succeed. Explore innovative ideas and solutions with ISWAD Tech today."
        keywords="Tech Blog, Industry Insights, Latest Tech Trends, AI Innovations, Software Development Tips, Tech News, Business Technology, Digital Transformation, Expert Opinions, Innovation Articles">
        <PageContainer
          pageIdentifier="blog"
          hasHeader={true}
          hasFooter={true}
          hasStickyHeader={false}
          hasStickyFooter={false}>
          <Blog
            blogs={blogs}
            featuredBlogs={featuredBlogs}
            numberOfBlogs={numberOfBlogs}
            numberOfBlogsInPage={numberOfBlogsInPage}
          />
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export async function getServerSideProps(context) {
  const allBlogsApiRoute = `${APP_DOMAIN_FOR_SERVER_SIDE_PROPS}${BLOG_API_ROUTE}`;
  const featuredBlogsApiRoute = `${APP_DOMAIN_FOR_SERVER_SIDE_PROPS}${BLOG_API_ROUTE}?is_popular_posts=1`;

  let blogs = [];
  let featuredBlogs = [];
  let numberOfBlogs = 0;
  let numberOfBlogsInPage = 12;

  try {
    const allBlogs = await axios.get(allBlogsApiRoute);
    if (allBlogs?.data?.blogs) {
      blogs = allBlogs.data.blogs;
    }
    const featuredBlogsData = await axios.get(featuredBlogsApiRoute, {
      params: {
        is_featured: 1
      }
    });
    if (featuredBlogsData?.data?.blogs) {
      featuredBlogs = featuredBlogsData.data.blogs;
    }
    if (allBlogs?.data?.number_of_blogs) {
      numberOfBlogs = allBlogs.data.number_of_blogs;
    }
    if (allBlogs?.data?.number_of_blogs_in_page) {
      numberOfBlogsInPage = allBlogs.data.number_of_blogs_in_page;
    }
    return {
      props: { blogs, featuredBlogs, numberOfBlogs, numberOfBlogsInPage }
    };
  } catch (err) {
    console.log(err);
    return { props: { blogs: [], numberOfBlogs: 0 } };
  }
}

export default Index;
