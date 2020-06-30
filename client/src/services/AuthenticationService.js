import Api from '@/services/Api';

import {
  login as loginURL,
  register as registerURL,
} from '../utils/urls';

export default {
  register(credentials) {
    return Api().post(registerURL, credentials);
  },
  login(credentials) {
    return Api().post(loginURL, credentials);
  },
};
