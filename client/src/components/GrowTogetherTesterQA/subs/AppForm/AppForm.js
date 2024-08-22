import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div, Form } from 'basedesign-iswad';

import TextBox from '@/baseComponents/FormComps/TextBox';
import Select from '@/baseComponents/FormComps/Select';
import TextArea from '@/baseComponents/FormComps/TextArea';
import FormCheckBox from '@/baseComponents/FormComps/FormCheckBox';
import SingleCheckBox from '@/baseComponents/FormComps/SingleCheckBox';
import FormRadioButton from '@/baseComponents/FormComps/FormRadioButton';
import Button from '@/baseComponents/ReusableComps/Button';

import {
  ASPIRING_ROLES,
  SENIORITY_LEVEL,
  WILLINGNESS_AS_TESTER,
  PREFERRED_INVOLVEMENT,
  TYPES_OF_PROJECTS,
  TOOLS,
  WILLINGNESS_TO_UPDATE,
  HOW_TO_HEAR
} from './constants';
import styles from './AppForm.module.scss';

const AppForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [aspiringRoles, setAspiringRoles] = useState([]);
  const [seniorityLevel, setSeniorityLevel] = useState(-1);
  const [willingnessAsTester, setWillingnessAsTester] = useState(-1);
  const [preferredInvolvement, setPreferredInvolvement] = useState(-1);
  const [typesOfProjects, setTypesOfProjects] = useState([]);
  const [tools, setTools] = useState([]);
  const [howToHear, setHowToHear] = useState('');
  const [feedback, setFeedback] = useState('');
  const [comments, setComments] = useState('');
  const [willingnessToUpdate, setWillingnessToUpdate] = useState(-1);

  const customValidations = () => {
    let validated = true;
    if (!province) {
      setProvinceErrorMessage('Province is required');
      validated = false;
    }

    if (dayjs().diff(birthDate, 'year') < 18) {
      setBirthDateErrorMessage('You must be more than 18 years old!');
      validated = false;
    }

    if (!profilePhoto) {
      setProfilePhotoErrorMessage('You must pick a profile photo');
      validated = false;
    }

    if (!message) {
      setMessageErrorMessage('You must send a message to us!');
      validated = false;
    }

    if (favoriteSports.length < 3) {
      setFavoriteSportsErrorMessage('You must pick at least 3 sports!');
      validated = false;
    }

    if (!termsApproval) {
      setTermsApprovalErrorMessage('You must agree our terms and conditions');
      validated = false;
    }

    if (!favoriteHobbey) {
      setFavoriteHobbeyErrorMessage('You must select a favorited hobby!');
      validated = false;
    }

    if (!richText) {
      setRichTextErrorMessage('You must write a text');
      validated = false;
    }

    return validated;
  };
  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        className="max-width-px-700 width-per-100 p-x-16 m-l-auto m-r-auto m-y-temp-14 box-shadow-type-one p-y-temp-7 br-rad-sm">
        <Form
          className={cx('width-per-100 bg-white m-l-auto m-r-auto')}
          onSubmit={() => console.log('Hello')}
          id="testForm">
          <Div className="m-b-temp-7 text-gray-dark">
            Thank you for your interest in becoming an early tester for GrowTogether! Please fill
            out the form below to join us in shaping the future of collaborative learning.
          </Div>
          <Div>
            <TextBox
              isRequired
              type="text"
              labelText="First Name"
              val={firstName}
              setVal={setFirstName}
              name="grow_together_first_name"
              id="grow_together_first_name"
            />
          </Div>
          <Div>
            <TextBox
              isRequired
              type="text"
              labelText="Last Name"
              val={lastName}
              setVal={setLastName}
              name="grow_together_last_name"
              id="grow_together_last_name"
            />
          </Div>
          <Div>
            <TextBox
              isRequired
              type="text"
              labelText="Email Address"
              val={email}
              setVal={setEmail}
              name="grow_together_email"
              id="grow_together_email"
            />
          </Div>
          <Div>
            <FormCheckBox
              options={ASPIRING_ROLES}
              labelText="Aspiring Role(s):"
              isRequired
              selectedOptions={aspiringRoles}
              setSelectedOptions={setAspiringRoles}
            />
          </Div>
          <Div>
            <FormRadioButton
              options={SENIORITY_LEVEL}
              labelText="Seniority Level:"
              isRequired
              val={seniorityLevel}
              setVal={setSeniorityLevel}
            />
          </Div>
          <Div>
            <FormRadioButton
              options={WILLINGNESS_AS_TESTER}
              labelText="Willingness to be involved as a tester:"
              isRequired
              val={willingnessAsTester}
              setVal={setWillingnessAsTester}
            />
          </Div>
          <Div>
            <FormRadioButton
              options={PREFERRED_INVOLVEMENT}
              labelText="Preferred level of involvement:"
              isRequired
              val={preferredInvolvement}
              setVal={setPreferredInvolvement}
            />
          </Div>
          <Div>
            <FormCheckBox
              options={TYPES_OF_PROJECTS}
              labelText="What Type of Projects Are You Most Interested In?"
              isRequired
              selectedOptions={typesOfProjects}
              setSelectedOptions={setTypesOfProjects}
            />
          </Div>
          <Div>
            <FormCheckBox
              options={TOOLS}
              labelText="What Tools or Technologies Do You Use Regularly?"
              isRequired
              selectedOptions={tools}
              setSelectedOptions={setTools}
            />
          </Div>
          <Div>
            <Select
              options={HOW_TO_HEAR}
              val={howToHear}
              setVal={setHowToHear}
              selectIntialShownText={''}
              placeHolder="Select a tool"
              labelText="How Did You Hear About GrowTogether?"
              isRequired
              id="grow_together_tool_to_hear"
            />
          </Div>
          <Div>
            <TextArea
              isRequired
              labelText="Share Your Feedback or Initial Thoughts on GrowTogether:"
              val={feedback}
              setVal={setFeedback}
              id="grow_together_feedback"
            />
          </Div>
          <Div>
            <TextArea
              isRequired
              labelText="Any Additional Comments or Suggestions?"
              val={comments}
              setVal={setComments}
              id="grow_together_comments"
            />
          </Div>
          <Div>
            <FormRadioButton
              options={WILLINGNESS_TO_UPDATE}
              labelText="Would You Like to Receive Updates About GrowTogether?"
              isRequired
              val={willingnessToUpdate}
              setVal={setWillingnessToUpdate}
            />
          </Div>

          <Div>
            <Button className="width-px-250" type="submit" id="testFormSubmit">
              Submit
            </Button>
          </Div>
        </Form>
      </Div>
    </>
  );
};

export default AppForm;
