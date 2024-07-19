import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import ResetPasswordComponent from '@/baseComponents/LoginRegister/ResetPassword';
import LoginRegisterTemplate from '@/components/AppPages/shared/LoginRegisterTemplate';
import Anchor from '@/baseComponents/ReusableComps/Anchor';

import { ANCHOR_TYPES } from '@/constants/devDesignVars';
import { PAGE_ROUTES } from '@/constants/vars';

import styles from './ForgotPassword.module.scss';

const ForgotPassword = () => {
  return (
    <>
      <LoginRegisterTemplate>
        <Heading className="text-theme-one m-y-16" type={4}>
          Forgot Password
        </Heading>
        <Div className="width-per-100 max-width-px-500">
          <ResetPasswordComponent />
        </Div>
        <Div type="flex" vAlign="center" className="width-per-100 max-width-px-500 m-y-16">
          <Div className="width-per-100 bg-gray-dark" style={{ width: '46%', height: '2px' }}></Div>
          <Div type="flex" hAlign="center" style={{ width: '8%' }}>
            or
          </Div>
          <Div
            className="height-px-5 width-per-100 bg-gray-dark"
            style={{ width: '46%', height: '2px' }}></Div>
        </Div>
        <Div className="">
          Back to{' '}
          <Anchor
            anchorType={ANCHOR_TYPES.noEffect}
            to={PAGE_ROUTES.LOGIN}
            className="text-theme-one">
            Login Page
          </Anchor>
        </Div>
        <Div type="flex" vAlign="center" className="width-per-100 max-width-px-500 m-y-16">
          <Div className="width-per-100 bg-gray-dark" style={{ width: '46%', height: '2px' }}></Div>
          <Div type="flex" hAlign="center" style={{ width: '8%' }}>
            or
          </Div>
          <Div
            className="height-px-5 width-per-100 bg-gray-dark"
            style={{ width: '46%', height: '2px' }}></Div>
        </Div>
        <Div className="">
          Don’t have an account?{' '}
          <Anchor
            anchorType={ANCHOR_TYPES.noEffect}
            to={PAGE_ROUTES.REGISTER}
            className="text-theme-one">
            Create Account
          </Anchor>
        </Div>
      </LoginRegisterTemplate>
    </>
  );
};

export default ForgotPassword;
