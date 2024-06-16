export const firstNameValidators = [
  { type: 'required', message: 'First Name is required' },
  {
    type: 'maxRequired',
    message: 'First Name must be at less than 256 characters',
    maxRequired: 256
  }
];

export const lastNameValidators = [
  { type: 'required', message: 'Last Name is required' },
  {
    type: 'maxRequired',
    message: 'Last Name must be at less than 256 characters',
    maxRequired: 256
  }
];

export const emailValidators = [
  { type: 'required', message: 'Email is required' },
  {
    type: 'email',
    message: 'Please type a valid email address'
  }
];
