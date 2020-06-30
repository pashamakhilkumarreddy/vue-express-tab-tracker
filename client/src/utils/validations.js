import {
  extend,
} from 'vee-validate';

import {
  emailRegex,
  passwordRegex,
} from './regex';

extend('required', {
  validate(val) {
    return {
      required: true,
      valid: ['', {}, null, undefined, []].indexOf(val) === -1,
    };
  },
  computesRequired: true,
  message: '{_field_} is required',
});

extend('email', (email) => {
  if (email.trim() && emailRegex.test(email)) return true;
  return 'Please enter a valid email address';
});

extend('password', (password) => {
  if (password.trim() && passwordRegex.test(password)) return true;
  return 'Please enter a valid password';
});

extend('minmax', {
  validate(val, { min, max }) {
    return val.length >= min && val.length <= max;
  },
  params: ['min', 'max'],
  message: '{_field_} should be of atleast {min} character and not more than {max} characters',
});
