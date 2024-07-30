import React from 'react';
import cx from 'classnames';
import axios from 'axios';
import { Div } from 'basedesign-iswad';

import RoleBasedRoute from '@/components/RouteHandlers/RoleBasedRoute';
import Seo from '@/components/PageWrappers/Seo';
import WebPageContainer from '@/components/PageWrappers/WebPageContainer';
import BlogDetail from '@/components/PublicWebPages/BlogDetail';
import NotFound from '@/components/PublicWebPages/NotFound';

import { USER_GROUPS } from '@/constants/userGroups';
import { IS_STAGING_ENV, APP_DOMAIN_FOR_SERVER_SIDE_PROPS } from 'config';
import { BLOG_DETAIL_API_ROUTE } from '@/constants/apiRoutes';

const Index = ({ blog }) => {
  return (
    <RoleBasedRoute hasAccessRole={IS_STAGING_ENV ? [USER_GROUPS.APP_ADMIN] : ['Public']}>
      <Seo
        title={`${blog?.page_title}`}
        description={blog?.meta_description}
        keywords={blog?.meta_keywords}>
        <WebPageContainer pageIdentifier="blog">
          {blog?.id ? <BlogDetail blog={blog} /> : <NotFound />}
        </WebPageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  const BlogApiRoute = `${APP_DOMAIN_FOR_SERVER_SIDE_PROPS}${BLOG_DETAIL_API_ROUTE}${slug}`;
  let blog = {};

  try {
    const curBlog = await axios.get(BlogApiRoute);
    if (curBlog?.data) {
      blog = curBlog.data;
    }
    return {
      props: { blog }
    };
  } catch (err) {
    console.log(err);
    return { props: { blog: {} } };
  }
}

export default Index;
