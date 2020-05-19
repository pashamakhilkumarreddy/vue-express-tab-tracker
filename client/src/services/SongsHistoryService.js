import Api from './Api';

export default {
  getRecentlyViewedSongs(params) {
    return Api().get('history', {
      params,
    });
  },
  setRecentlyViewedSong(history) {
    return Api().post('history', history);
  },
};
