import Api from './Api';

import { history as historyURL } from '../utils/urls';

export default {
  getRecentlyViewedSongs() {
    return Api().get(historyURL);
  },
  setRecentlyViewedSong(history) {
    return Api().post(historyURL, history);
  },
};
