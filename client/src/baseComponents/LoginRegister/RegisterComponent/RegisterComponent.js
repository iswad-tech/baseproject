import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Div } from 'basedesign-iswad';
import Router from 'next/router';

import TextBox from '@/baseComponents/FormComps/TextBox';
import Captcha from '@/baseComponents/FormComps/Captcha';
import Button from '@/baseComponents/ReusableComps/Button';
import Icon from '@/baseComponents/ReusableComps/Icon';

import useApiCalls from '@/hooks/useApiCalls';
import { REGISTER_API_ROUTE, RESEND_ACTIVATE_EMAIL_API_ROUTE } from '@/constants/apiRoutes';
import { USER_GROUPS } from '@/constants/userGroups';
import { addAlertItem } from '@/utils/notifications';
import { PAGE_ROUTES } from '@/constants/vars';

import { validateForm } from './utils';
import styles from './RegisterComponent.module.scss';

const RegisterComponent = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [userCaptchaCode, setUserCaptchaCode] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');
  const [captchaUUID, setCaptchaUUID] = useState('');

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isAuthenticated?.authenticated) {
      Router.push(PAGE_ROUTES.DASHBOARD);
    }
  }, [isAuthenticated]);

  const [sendRegisterReq, setSendRegisterReq] = useState(false);
  const bodyData = {
    first_name: firstName,
    last_name: lastName,
    email: email.toLowerCase(),
    password,
    group_names: [USER_GROUPS.CLIENT],
    captcha_uuid: captchaUUID,
    user_captcha_code: userCaptchaCode
  };
  const { data, error } = useApiCalls({
    sendReq: sendRegisterReq,
    setSendReq: setSendRegisterReq,
    method: 'POST',
    url: REGISTER_API_ROUTE,
    bodyData
  });

  useEffect(() => {
    if (data) {
      setSubmitted(true);
      addAlertItem(dispatch, 'Please check your inbox to validate your email address.', 'success');
    }
  }, [data]);

  const [sendResendEmailReq, setSendResendEmailReq] = useState(false);
  const bodyResendData = {
    email
  };
  const { data: resendData, error: resendError } = useApiCalls({
    sendReq: sendResendEmailReq,
    setSendReq: setSendResendEmailReq,
    method: 'POST',
    url: RESEND_ACTIVATE_EMAIL_API_ROUTE,
    bodyData: bodyResendData
  });

  useEffect(() => {
    if (resendData) {
      addAlertItem(dispatch, 'Please check your inbox to validate your email address.', 'success');
    }
  }, [resendData]);

  return (
    <>
      {isAuthenticated?.isChecked && (
        <Form
          className="textWhite py1"
          onSubmit={() => {
            if (
              validateForm(
                dispatch,
                firstName,
                lastName,
                email,
                password,
                userCaptchaCode,
                captchaCode
              )
            ) {
              setSendRegisterReq(true);
            }
          }}>
          <Div className="m-b-16">
            <TextBox
              type="text"
              name="first_name"
              isRequired
              labelText="First Name"
              placeholder=""
              val={firstName}
              setVal={setFirstName}
              id="registerFirstName"
              hasMarginBottom={false}
            />
          </Div>
          <Div className="m-b-16">
            <TextBox
              type="text"
              name="last_name"
              isRequired
              labelText="Last Name"
              placeholder=""
              val={lastName}
              setVal={setLastName}
              id="registerLastName"
              hasMarginBottom={false}
            />
          </Div>
          <Div className="m-b-16">
            <TextBox
              type="text"
              name="email"
              isRequired
              labelText="Email"
              placeholder=""
              val={email}
              setVal={setEmail}
              id="registerEmail"
              hasMarginBottom={false}
            />
          </Div>
          <Div className="m-b-16">
            <TextBox
              type="password"
              name="password"
              placeholder=""
              labelText="Password"
              isRequired
              val={password}
              setVal={setPassword}
              id="registerPassword"
              hasMarginBottom={false}
            />
          </Div>
          <Div>
            <Captcha
              userCaptchaCode={userCaptchaCode}
              setUserCaptchaCode={setUserCaptchaCode}
              captchaCode={captchaCode}
              setCaptchaCode={setCaptchaCode}
              setCaptchaUUID={setCaptchaUUID}
            />
          </Div>
          <Div type="flex" hAlign="center">
            <Button id="registerSubmit" className="width-per-100" type="submit">
              Register
            </Button>
          </Div>
        </Form>
      )}
      {submitted && (
        <Div type="flex" hAlign="center" className="width-per-100 m-t-16">
          <Button
            className="width-per-100 flex flex--jc--center flex--ai--center"
            onClick={() => setSendResendEmailReq(true)}>
            <Div className={cx('ml1', styles.iconContainer)}>
              <Icon type="rotate" color="white" />
            </Div>
            <Div>Resend Email</Div>
          </Button>
        </Div>
      )}
    </>
  );
};

export default RegisterComponent;
