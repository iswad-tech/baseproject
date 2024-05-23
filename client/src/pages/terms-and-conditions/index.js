import React from "react";
import cx from "classnames";
import { Div } from "basedesign-iswad";

import PublicRoute from "@/components/PublicRoute";
import RoleBasedRoute from "@/components/RoleBasedRoute";
import Seo from "@/components/Seo";
import PageContainer from "@/components/PageContainer";

import { USER_GROUPS } from "@/constants/userGroups";
import { IS_STAGING_ENV } from "config";

import styles from "./Index.module.scss";

const Index = () => {
  return (
    <RoleBasedRoute hasAccessRole={IS_STAGING_ENV ? [USER_GROUPS.APP_ADMIN] : ['Public']}>
      <Seo title="Home | Troop">
        <PageContainer pageIdentifier="home" hasWavyShape={true} footerIsColored={true}>
          <Div className="">Index</Div>
        </PageContainer>
      </Seo>
    </RoleBasedRoute>
  );
};

export default Index;
