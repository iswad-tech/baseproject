import { addAlertItem } from '@/utils/notifications';
import { isValidEmail } from '@/utils/helpers';

export const validateForm = (dispatch, email) => {
  let validated = true;
  if (!email?.length) {
    addAlertItem(dispatch, 'Email is a required field.', 'error');
    validated = false;
  }
  if (!isValidEmail(email)) {
    addAlertItem(dispatch, 'Please enter a valid email address.', 'error');
    validated = false;
  }
  return validated;
};

export const validatePsswordForm = (dispatch, password) => {
  let validated = true;
  if (!password?.length) {
    addAlertItem(dispatch, 'password is a required field.', 'error');
    validated = false;
  }
  return validated;
};
