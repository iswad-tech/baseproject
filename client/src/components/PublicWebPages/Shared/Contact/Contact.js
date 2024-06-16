import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div, Heading, Form } from 'basedesign-iswad';

import DivWidthDynamic from '@/baseComponents/ReusableComps/DivWidthDynamic';
import Icon from '@/baseComponents/ReusableComps/Icon';
import TextBox from '@/baseComponents/FormComps/TextBox';
import Select from '@/baseComponents/FormComps/Select';
import TextArea from '@/baseComponents/FormComps/TextArea';
import Button from '@/baseComponents/ReusableComps/Button';

import useApiCalls from '@/hooks/useApiCalls';
import { CONTACT_FORM_API_ROUTE } from '@/constants/apiRoutes';
import { LIST_OF_ICONS } from '@/constants/devDesignVars';
import { addAlertItem } from '@/utils/notifications';

import { SUBJECTS } from './constants';
import { firstNameValidators, lastNameValidators, emailValidators } from './validators';
import styles from './Contact.module.scss';

const Contact = () => {
  const dispatch = useDispatch();
  const containerRef = useRef();

  const [containerWidth, setContainerWidth] = useState(0);

  const [firstName, setFirstName] = useState('');
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState('');

  const [lastName, setLastName] = useState('');
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState('');

  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const [subject, setSubject] = useState('');
  const [subjectErrorMessage, setSubjectErrorMessage] = useState('');

  const [message, setMessage] = useState('');
  const [messageErrorMessage, setMessageErrorMessage] = useState('');

  useEffect(() => {
    if (SUBJECTS?.[0]?.value) {
      setSubject(SUBJECTS[0].value);
    }
  }, [SUBJECTS]);

  const toBeValidatedFields = [
    {
      input_name: 'first_name',
      validators: firstNameValidators,
      errorMessageHandler: setFirstNameErrorMessage
    },
    {
      input_name: 'last_name',
      validators: lastNameValidators,
      errorMessageHandler: setLastNameErrorMessage
    },
    {
      input_name: 'email',
      validators: emailValidators,
      errorMessageHandler: setEmailErrorMessage
    }
  ];

  // -----------------------------------------------------
  // -----------------------------------------------------
  const [sendContactReq, setSendContactReq] = useState(false);
  const bodyData = {
    first_name: firstName,
    last_name: lastName,
    email,
    subject,
    message
  };
  const { data, error } = useApiCalls({
    sendReq: sendContactReq,
    setSendReq: setSendContactReq,
    method: 'POST',
    url: CONTACT_FORM_API_ROUTE,
    bodyData
  });
  useEffect(() => {
    if (data?.success) {
      addAlertItem(
        dispatch,
        'Thank you! We have received your message and will get back to you soon.',
        'success'
      );
    }
  }, [data]);
  // -----------------------------------------------------
  // -----------------------------------------------------

  const customValidations = () => {
    let validated = true;
    if (subject === '0') {
      setSubjectErrorMessage('Please select a subject');
      validated = false;
    }
    if (!message) {
      setMessageErrorMessage('Message is a required field');
      validated = false;
    }
    return validated;
  };
  const submitHandler = () => {
    if (customValidations()) {
      setSendContactReq(true);
    }
  };

  return (
    <>
      <Div
        className={cx(
          'width-per-100',
          containerWidth < 800 ? '' : 'global-bg-grad-one p-all-temp-14'
        )}
        ref={(el) => (containerRef.current = el)}>
        <Div
          className={cx(
            'global-container bg-off-white width-per-100 p-all-temp-7',
            containerWidth < 800 ? '' : 'br-rad-3xl'
          )}>
          <DivWidthDynamic
            setContainerWidth={setContainerWidth}
            type="flex"
            direction={containerWidth < 800 ? 'vertical' : 'horizontal'}
            className="width-per-100">
            {/* Information */}
            <Div className={cx(containerWidth < 800 ? 'width-per-100 m-b-temp-7' : 'width-per-40')}>
              <Div className={cx(containerWidth < 800 ? 'width-per-100' : 'max-width-px-250')}>
                <Heading type={4} className="m-b-temp-7">
                  Let’s Talk About What We Can <span className="text-theme-one">Make</span> Together
                </Heading>
                <Div className="m-b-temp-7">Your feedback is valuable to us.</Div>
                <Div className="">
                  <Div type="flex" vAlign="center">
                    <Div
                      type="flex"
                      hAlign="center"
                      vAlign="center"
                      className="width-px-20 height-px-30 m-r-8">
                      <Icon type={LIST_OF_ICONS.envelope} color={'black'} />
                    </Div>
                    <Div type="flex" vAlign="center" className="height-px-30">
                      info@iswad.tech
                    </Div>
                  </Div>

                  <Div type="flex" vAlign="center">
                    <Div
                      type="flex"
                      hAlign="center"
                      vAlign="center"
                      className="width-px-20 height-px-30 m-r-8">
                      <Icon type={LIST_OF_ICONS.phone} color={'black'} />
                    </Div>
                    <Div type="flex" vAlign="center" className="height-px-30">
                      +1(613)298-0855
                    </Div>
                  </Div>
                </Div>
              </Div>
            </Div>
            {/* Form */}
            <Form
              className="width-per-100"
              onSubmit={submitHandler}
              toBeValidatedFields={toBeValidatedFields}
              id="contact_form">
              <Div
                type="flex"
                direction={containerWidth < 800 ? 'vertical' : 'horizontal'}
                className="width-per-100 m-b-temp-7">
                <Div
                  className={cx(
                    'm-r-temp-7',
                    containerWidth < 800 ? 'width-per-100 m-b-temp-7' : 'width-per-50'
                  )}>
                  <TextBox
                    val={firstName}
                    setVal={setFirstName}
                    placeHolder="First Name"
                    hasMarginBottom={false}
                    errorMessage={firstNameErrorMessage}
                    errorHandler={setFirstNameErrorMessage}
                    name="first_name"
                    id="first_name_contact_form"
                  />
                </Div>
                <Div className={cx(containerWidth < 800 ? 'width-per-100' : 'width-per-50')}>
                  <TextBox
                    val={lastName}
                    setVal={setLastName}
                    placeHolder="Last Name"
                    hasMarginBottom={false}
                    errorMessage={lastNameErrorMessage}
                    errorHandler={setLastNameErrorMessage}
                    name="last_name"
                    id="last_name_contact_form"
                  />
                </Div>
              </Div>

              <Div className={cx('width-per-100 m-b-temp-7')}>
                <TextBox
                  val={email}
                  setVal={setEmail}
                  placeHolder="Email"
                  hasMarginBottom={false}
                  errorMessage={emailErrorMessage}
                  errorHandler={setEmailErrorMessage}
                  name="email"
                  id="email_contact_form"
                />
              </Div>

              <Div
                className={cx(
                  'm-b-temp-7',
                  containerWidth < 800 ? 'width-per-100' : 'width-per-50'
                )}>
                <Select
                  options={SUBJECTS}
                  val={subject}
                  setVal={setSubject}
                  labelText={'I would like help with...'}
                  errorMessage={subjectErrorMessage}
                  errorHandler={setSubjectErrorMessage}
                />
              </Div>

              <Div className={cx('width-per-100')}>
                <TextArea
                  val={message}
                  setVal={setMessage}
                  hasMarginBottom={false}
                  placeHolder="Message"
                  errorMessage={messageErrorMessage}
                  errorHandler={setMessageErrorMessage}
                />
              </Div>

              <Div className="m-t-temp-7 width-px-200">
                <Button>Submit</Button>
              </Div>
            </Form>
            {/* End */}
          </DivWidthDynamic>
        </Div>
      </Div>
    </>
  );
};

export default Contact;
