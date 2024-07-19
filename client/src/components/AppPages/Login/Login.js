import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import LoginComponent from '@/baseComponents/LoginRegister/LoginComponent';
import Anchor from '@/baseComponents/ReusableComps/Anchor';
import PngIcon from '@/baseComponents/ReusableComps/PngIcon';
import GoogleAuth from '@/baseComponents/LoginRegister/GoogleAuth';
import LoginRegisterTemplate from '@/components/AppPages/shared/LoginRegisterTemplate';

import { ANCHOR_TYPES, PNG_ICON_TYPES } from '@/constants/devDesignVars';
import { PAGE_ROUTES } from '@/constants/vars';

import styles from './Login.module.scss';

const Login = () => {
  return (
    <>
      <LoginRegisterTemplate>
        <Heading className="text-theme-one m-y-16" type={4}>
          Welcome Back!
        </Heading>
        <Div className="width-per-100 max-width-px-500">
          <LoginComponent />
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
        <GoogleAuth>
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className={cx(
              'p-y-8 br-all-solid-1 br-rad-px-20 br-gray-dark text-gray-dark m-y-16 bg-theme-one-on-hover mouse-hand br-theme-one-on-hover text-white-on-hover m-l-auto m-r-auto max-width-px-500 width-per-100'
            )}>
            <Div className="m-r-8">
              <PngIcon type={PNG_ICON_TYPES.google} width={20} height={25} />
            </Div>
            <Div>Sign in with Google</Div>
          </Div>
        </GoogleAuth>
        <Div className="m-t-16">
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

export default Login;
