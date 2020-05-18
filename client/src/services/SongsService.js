import Api from '@/services/Api';

export default {
  getSongs(search) {
    return Api().get('songs', {
      params: {
        search,
      },
    });
  },
  getSong(songId) {
    return Api().get(`songs/${songId}`);
  },
  createSong(song) {
    return Api().post('songs', song);
  },
  editSong(song) {
    return Api().put(`songs/${song.id}`, song);
  },
};
