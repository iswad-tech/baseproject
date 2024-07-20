import React from 'react';

import Seo from '@/components/PageWrappers/Seo';
import PageContainer from '@/components/PageWrappers/PageContainer';
import Home from '@/components/PublicWebPages/Home';

import { IS_STAGING_ENV } from 'config';

const Index = () => {
  return (
    <>
      {!IS_STAGING_ENV ? (
        <Seo
          title={`Home | ISWAD`}
          description="Discover cutting-edge MVP development with ISWAD Tech. We specialize in creating cost-effective, user-centric web and mobile applications for startups and SMEs. Accelerate your time-to-market, minimize risks, and ensure continuous improvement with our expert solutions. Unlock your business potential today."
          keywords="AI Solutions, Artificial Intelligence, Data Analysis, Machine Learning, Custom Software Development, Mobile App Development, Web App Development, MVP Development, SaaS Solutions, API Integration, Technology Consultancy, Digital Transformation, Business Automation, Tech Innovation, Scalable Tech Solutions, Customer Experience, Innovative Technology Services, Data-Driven Insights, Future of Technology, Tech-Driven Growth">
          <PageContainer
            pageIdentifier="home"
            hasHeader={true}
            hasFooter={true}
            hasStickyHeader={false}
            hasStickyFooter={false}>
            <Home />
          </PageContainer>
        </Seo>
      ) : (
        ''
      )}
    </>
  );
};

export default Index;
