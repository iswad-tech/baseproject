import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div, Heading } from 'basedesign-iswad';

import InputWithButton from '@/baseComponents/FormComps/InputWithButton';

import useApiCalls from '@/hooks/useApiCalls';
import { WEB_SUBSCRIBER_API_ROUTE } from '@/constants/apiRoutes';
import { addAlertItem } from '@/utils/notifications';
import { setModalType } from '@/reducers/general/modalType';
import { setModalHeader } from '@/reducers/general/modalHeader';
import { setModalProps } from '@/reducers/general/modalProps';
import { isValidEmail } from '@/utils/helpers';
import { MODAL_TYPES } from '@/constants/devDesignVars';

import styles from './StayInTheLoop.module.scss';

const StayInTheLoop = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  const customValidation = () => {
    let validated = true;
    if (!email) {
      validated = false;
      addAlertItem(dispatch, 'Email is required to submit your information.', 'error');
      return false;
    }
    if (!isValidEmail(email)) {
      validated = false;
      addAlertItem(dispatch, 'Please enter a correct email address.', 'error');
    }
    return validated;
  };

  // -----------------------------------------------------------
  // -----------------------------------------------------------
  const [sendSubscriberReq, setSendSubscriberReq] = useState(false);
  const bodyData = {
    email
  };
  const { data, error } = useApiCalls({
    sendReq: sendSubscriberReq,
    setSendReq: setSendSubscriberReq,
    method: 'POST',
    url: WEB_SUBSCRIBER_API_ROUTE,
    bodyData
  });
  useEffect(() => {
    if (data) {
      if (data?.success) {
        setEmail('');
        dispatch(
          setModalProps({
            message: `We're thrilled to have you on board. Your subscription ensures you won't miss out on our latest blog posts, exciting updates, and special events. Stay tuned for more information, and feel free to reach out if you have any questions. Welcome to our community!`
          })
        );
        dispatch(setModalType(MODAL_TYPES['prompt-message']));
      }
    }
  }, [data]);
  // -----------------------------------------------------------
  // -----------------------------------------------------------

  return (
    <>
      <Div className={cx('p-x-temp-7 p-t-temp-7 bg-theme-two', styles.container)}>
        <Heading type={4} className="text-white text-center m-b-temp-7">
          Stay in the Loop
        </Heading>
        <Div className="m-b-temp-7 text-center text-white"> Subscribe to our Blog updates</Div>
        <Div className="width-per-100 max-width-px-700 m-l-auto m-r-auto">
          <InputWithButton
            val={email}
            setVal={setEmail}
            placeHolder="Email"
            name="email"
            id="web-subsrciber-blog-page-email"
            btnText="Subscribe"
            onBtnClick={() => {
              if (customValidation()) {
                try {
                  window.gtag('event', 'conversion', {
                    send_to: 'AW-16679291614/VAizCPnUus0ZEN6Vp5E-',
                    event_callback: () => {
                      console.log('Event is tracked');
                    }
                  });
                } catch (err) {
                  console.log(err);
                }
                setSendSubscriberReq(true);
              }
            }}
          />
        </Div>
      </Div>
    </>
  );
};

export default StayInTheLoop;
