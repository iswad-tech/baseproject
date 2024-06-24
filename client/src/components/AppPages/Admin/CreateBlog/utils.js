import { addAlertItem } from '@/utils/notifications';

export const customValidations = (dispatch, title, photo, content, excerpt) => {
  let validated = true;
  if (!title) {
    addAlertItem(dispatch, 'Title is required', 'error');
    validated = false;
  }

  if (!photo) {
    addAlertItem(dispatch, 'You must pick a cover photo', 'error');
    validated = false;
  }

  if (!content) {
    addAlertItem(dispatch, 'You must create a meaningful content!', 'error');
    validated = false;
  }

  if (excerpt.length < 10) {
    addAlertItem(dispatch, 'Excerpt must be at least 10 characters!', 'error');
    validated = false;
  }

  if (excerpt.length > 300) {
    addAlertItem(dispatch, 'Excerpt must be less than 300 characters!', 'error');
    validated = false;
  }

  return validated;
};
