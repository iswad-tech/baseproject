import { addAlertItem } from '@/utils/notifications';
import { isValidEmail } from '@/utils/helpers';

export const validateForm = (
  dispatch,
  firstName,
  lastName,
  email,
  password,
  userCaptchaCode,
  captchaCode
) => {
  let validated = true;
  if (!firstName?.length) {
    addAlertItem(dispatch, 'First name is a required field.', 'error');
    validated = false;
  }
  if (!lastName?.length) {
    addAlertItem(dispatch, 'Last name is a required field.', 'error');
    validated = false;
  }
  if (!email?.length) {
    addAlertItem(dispatch, 'Email is a required field.', 'error');
    validated = false;
  }
  if (!isValidEmail(email)) {
    addAlertItem(dispatch, 'Please enter a valid email address.', 'error');
    validated = false;
  }
  if (!password?.length) {
    addAlertItem(dispatch, 'password is a required field.', 'error');
    validated = false;
  }
  if (!userCaptchaCode) {
    addAlertItem(dispatch, 'Please enter the captch code correctly.', 'error');
    validated = false;
  }

  if (userCaptchaCode !== captchaCode) {
    addAlertItem(dispatch, 'Please enter the captch code correctly.', 'error');
    validated = false;
  }
  return validated;
};
