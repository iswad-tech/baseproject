import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import LoginRegisterTemplate from '@/components/AppPages/shared/LoginRegisterTemplate';
import ActivateUserComponent from '@/baseComponents/LoginRegister/ActivateUser';

import styles from './ActivateUser.module.scss';

const ActivateUser = () => {
  return (
    <>
      <LoginRegisterTemplate>
        <Heading className="text-theme-one m-y-16" type={4}>
          Activating Your Account!
        </Heading>
        <Div className="width-per-100 max-width-px-500">
          <ActivateUserComponent />
        </Div>
      </LoginRegisterTemplate>
    </>
  );
};

export default ActivateUser;
