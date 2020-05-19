import Api from './Api';

export default {
  getRecentlyViewedSongs() {
    return Api().get('history');
  },
  setRecentlyViewedSong(history) {
    return Api().post('history', history);
  },
};
