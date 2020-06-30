import Api from '@/services/Api';

import { songs } from '../utils/urls';

export default {
  getSongs(search) {
    return Api().get(songs, {
      params: {
        search,
      },
    });
  },
  getSong(songId) {
    return Api().get(`${songs}/${songId}`);
  },
  createSong(song) {
    return Api().post(songs, song);
  },
  editSong(song) {
    return Api().put(`${songs}/${song.id}`, song);
  },
};
