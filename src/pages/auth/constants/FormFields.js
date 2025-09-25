const loginFields = [
  {
    labelText: 'E-mail or License ID',
    labelFor: 'email-address',
    id: 'email',
    name: 'email',
    type: 'text',
    autoComplete: 'email',
    isRequired: true,
    placeholder: 'Email address',
  },
  {
    labelText: 'Password',
    labelFor: 'password',
    id: 'password',
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
    isRequired: true,
    placeholder: 'Password',
  },
];

const signupFields = [
  {
    labelText: 'Your name',
    labelFor: 'name',
    id: 'name',
    name: 'name',
    type: 'text',
    autoComplete: 'name',
    isRequired: true,
    placeholder: 'Enter your name',
  },
  {
    labelText: 'Email or License ID',
    labelFor: 'email_license_id',
    id: 'email_license_id',
    name: 'email_license_id',
    type: 'text',
    autoComplete: 'email_license_id',
    isRequired: true,
    placeholder: 'Enter your email or license ID',
  },
];

const passwordFields = [
  {
    labelText: 'Password',
    labelFor: 'password',
    id: 'password',
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
    isRequired: true,
    placeholder: 'Password',
  },
  {
    labelText: 'Confirm Password',
    labelFor: 'confirm_password',
    id: 'confirm_password',
    name: 'confirm_password',
    type: 'password',
    autoComplete: 'confirm-password',
    isRequired: true,
    placeholder: 'Confirm Password',
  },
];

export { loginFields, signupFields, passwordFields };

