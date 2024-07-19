import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { Div, Form } from 'basedesign-iswad';
import { useRouter } from 'next/router';

import TextBox from '@/baseComponents/FormComps/TextBox';
import Button from '@/baseComponents/ReusableComps/Button';

import useApiCalls from '@/hooks/useApiCalls';
import { SEND_RESET_PASSWORD_EMAIL_API_ROUTE, PASSWORD_SET_API_ROUTE } from '@/constants/apiRoutes';
import { addAlertItem } from '@/utils/notifications';
import { PAGE_ROUTES } from '@/constants/vars';

import { validateForm, validatePsswordForm } from './utils';
import styles from './ResetPassword.module.scss';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (isAuthenticated?.authenticated) {
      router.push(PAGE_ROUTES.DASHBOARD);
    }
  }, [isAuthenticated]);

  const [sendResetEmailReq, setSendResetEmailReq] = useState(false);
  const bodyData = { email };
  const { data, error } = useApiCalls({
    sendReq: sendResetEmailReq,
    setSendReq: setSendResetEmailReq,
    method: 'POST',
    url: SEND_RESET_PASSWORD_EMAIL_API_ROUTE,
    bodyData
  });

  useEffect(() => {
    if (data) {
      addAlertItem(dispatch, 'Please check your inbox to validate your email address.', 'success');
    }
  }, [data]);

  useEffect(() => {
    if (router?.query?.token) {
      const localToken = router.query.token;
      setToken(localToken);
    }
  }, [router]);

  useEffect(() => {
    if (token) {
      let decoded;
      try {
        decoded = jwt_decode(token);
      } catch (e) {
        decoded = false;
      }
      if (decoded?.exp && Date.now() <= decoded.exp * 1000 && decoded?.user_id) {
        setUserId(decoded.user_id);
      } else {
        addAlertItem(
          dispatch,
          'Sorry, we are unable to reset your password. That might be because your token has been expired.',
          'error'
        );
      }
    }
  }, [token]);

  const [sendPasswordSetReq, setSendPasswordSetReq] = useState(false);
  const passwordSetbodyData = { userId, token, password };
  const { data: passwordData, error: passwordError } = useApiCalls({
    sendReq: sendPasswordSetReq,
    setSendReq: setSendPasswordSetReq,
    method: 'POST',
    url: PASSWORD_SET_API_ROUTE,
    bodyData: passwordSetbodyData
  });

  useEffect(() => {
    if (passwordData) {
      addAlertItem(
        dispatch,
        'Congrats! you have successfully reset your password, try to login with your new password.',
        'success'
      );
      router.push(PAGE_ROUTES.LOGIN);
    }
  }, [passwordData]);

  return (
    <>
      {!token ? (
        <Form
          className="textWhite py1"
          onSubmit={() => {
            if (validateForm(dispatch, email)) {
              setSendResetEmailReq(true);
            }
          }}>
          <Div className="m-b-16">
            <TextBox
              labelText={'Email Address'}
              isRequired
              type="text"
              name="email"
              placeholder="Type your email"
              val={email}
              setVal={setEmail}
              id="forgot-password-email"
              hasMarginBottom={false}
            />
          </Div>
          <Button>Submit</Button>
        </Form>
      ) : (
        <Form
          className="textWhite py1"
          onSubmit={() => {
            if (validatePsswordForm(dispatch, password)) {
              setSendPasswordSetReq(true);
            }
          }}>
          <Div className="m-b-16">
            <TextBox
              labelText={'New Password'}
              isRequired
              type="password"
              name="password"
              placeholder="Type your password"
              val={password}
              setVal={setPassword}
              hasMarginBottom={false}
              id="forgot-password-password"
            />
          </Div>
          <Button>Submit</Button>
        </Form>
      )}
    </>
  );
};

export default ResetPassword;
