import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import DivWidthDynamic from '@/baseComponents/ReusableComps/DivWidthDynamic';
import Icon from '@/baseComponents/ReusableComps/Icon';
import TextBox from '@/baseComponents/FormComps/TextBox';
import Select from '@/baseComponents/FormComps/Select';
import TextArea from '@/baseComponents/FormComps/TextArea';

import { LIST_OF_ICONS } from '@/constants/devDesignVars';

import styles from './Contact.module.scss';

const Contact = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <Div
        className={cx(
          'width-per-100',
          containerWidth < 800 ? '' : 'global-bg-grad-one p-all-temp-14'
        )}>
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
            <Div className="width-per-100">
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
                  />
                </Div>
                <Div className={cx(containerWidth < 800 ? 'width-per-100' : 'width-per-50')}>
                  <TextBox
                    val={firstName}
                    setVal={setFirstName}
                    placeHolder="Last Name"
                    hasMarginBottom={false}
                  />
                </Div>
              </Div>

              <Div className={cx('width-per-100 m-b-temp-7')}>
                <TextBox
                  val={email}
                  setVal={setEmail}
                  placeHolder="Email"
                  hasMarginBottom={false}
                />
              </Div>

              <Div
                className={cx(
                  'm-b-temp-7',
                  containerWidth < 800 ? 'width-per-100' : 'width-per-50'
                )}>
                <Select val={subject} setVal={setSubject} labelText={'I would like help with...'} />
              </Div>

              <Div className={cx('width-per-100')}>
                <TextArea
                  val={message}
                  setVal={setMessage}
                  hasMarginBottom={false}
                  placeHolder="Message"
                />
              </Div>
            </Div>
            {/* End */}
          </DivWidthDynamic>
        </Div>
      </Div>
    </>
  );
};

export default Contact;
