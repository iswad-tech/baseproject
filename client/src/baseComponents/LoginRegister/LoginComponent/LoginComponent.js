import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Div, Form } from 'basedesign-iswad';
import Router from 'next/router';

import TextBox from '@/baseComponents/FormComps/TextBox';
import Button from '@/baseComponents/ReusableComps/Button';
import SingleCheckBox from '@/baseComponents/FormComps/SingleCheckBox';
import Anchor from '@/baseComponents/ReusableComps/Anchor';

import useApiCalls from '@/hooks/useApiCalls';
import { validateForm } from './utils';
import { loginUser } from '@/utils/auth';
import { LOGIN_API_ROUTE } from '@/constants/apiRoutes';
import { PAGE_ROUTES } from '@/constants/vars';

import styles from './LoginComponent.module.scss';
import { ANCHOR_TYPES } from '@/constants/devDesignVars';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const userIPInfo = useSelector((state) => state.userIPInfo);

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  useEffect(() => {
    if (isAuthenticated?.authenticated) {
      Router.push(PAGE_ROUTES.DASHBOARD);
    }
  }, [isAuthenticated]);

  const [sendLoginReq, setSendLoginReq] = useState(false);
  const bodyData = {
    email: email.toLowerCase(),
    password,
    keep_logged_in: keepLoggedIn,
    ip_address: userIPInfo['ip']
  };
  const { data, error } = useApiCalls({
    sendReq: sendLoginReq,
    setSendReq: setSendLoginReq,
    method: 'POST',
    url: LOGIN_API_ROUTE,
    bodyData
  });

  useEffect(() => {
    if (data) {
      loginUser(data['access'], data['refresh'], dispatch);
    }
  }, [data]);

  return (
    <>
      {isAuthenticated?.isChecked && (
        <Form
          className="width-per-100"
          onSubmit={() => {
            if (validateForm(dispatch, email, password)) {
              setSendLoginReq(true);
            }
          }}>
          <Div className="m-b-16">
            <TextBox
              type="text"
              name="email"
              labelText="Email"
              placeholder="Enter Email"
              isRequired
              val={email}
              setVal={setEmail}
              hasMarginBottom={false}
              id="loginEmail"
            />
          </Div>
          <Div className="m-b-16">
            <TextBox
              type="password"
              name="password"
              labelText="Password"
              placeholder="Enter Password"
              isRequired
              val={password}
              setVal={setPassword}
              id="loginPassword"
              hasMarginBottom={false}
            />
          </Div>
          <Div type="flex" distributedBetween>
            <Div>
              <SingleCheckBox
                labelText="Remember me"
                selected={keepLoggedIn}
                setSelected={setKeepLoggedIn}
                hasMarginBottom={false}
              />
            </Div>
            <Div className="fs-px-12 text-theme-one">
              <Anchor
                anchorType={ANCHOR_TYPES.noEffect}
                to={PAGE_ROUTES.FORGOT_PASSWORD}
                className="text-theme-one">
                Forgot password?
              </Anchor>
            </Div>
          </Div>
          <Div type="flex" hAlign="center" className="m-t-8">
            <Button className="width-per-100" type="submit" id="loginButton">
              Login
            </Button>
          </Div>
        </Form>
      )}
    </>
  );
};

export default LoginComponent;
