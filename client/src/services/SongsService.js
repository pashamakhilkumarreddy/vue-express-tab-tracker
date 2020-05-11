import Api from '@/services/Api';

export default {
  getSongs() {
    return Api().get('songs');
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
