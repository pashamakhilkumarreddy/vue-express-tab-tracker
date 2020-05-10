const { Song } = require('../models');

module.exports = {
  async addSong(req, res) {
    try {
      const song = await Song.create(req.body);
      res.status(200).send({
        error: false,
        song: song.toJSON(),
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: true,
        messages: ['Internal server error'],
      });
    }
  },
  async getSongs(req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10,
      });
      res.status(200).send({
        error: false,
        songs: JSON.stringify(songs),
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: true,
        messages: ['Internal server error'],
      });
    }
  },
};
