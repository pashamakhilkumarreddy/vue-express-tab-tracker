const {
  Op,
} = require('sequelize');

const {
  Song,
} = require('../models');

module.exports = {
  async addSong(req, res) {
    try {
      const song = await Song.create(req.body);
      res.status(201).send({
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
      let songs = null;
      const {
        search,
      } = req.query;
      if (search) {
        songs = await Song.findAll({
          where: {
            [Op.or]: {
              title: {
                [Op.like]: `%${search}%`,
              },
              artist: {
                [Op.like]: `%${search}%`,
              },
              genre: {
                [Op.like]: `%${search}%`,
              },
              album: {
                [Op.like]: `%${search}%`,
              },
            },
          },
        });
      } else {
        songs = await Song.findAll({
          limit: 10,
        });
      }
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
  async getSong(req, res) {
    try {
      const {
        id,
      } = req.params;
      const song = await Song.findOne({
        where: {
          id,
        },
      });
      if (song) {
        res.status(200).send({
          error: false,
          song: song.toJSON(),
        });
        return;
      }
      res.status(404).send({
        error: true,
        messages: ['No song found with the given id'],
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: true,
        messages: ['Internal server error'],
      });
    }
  },
  async editSong(req, res) {
    try {
      const {
        id,
      } = req.params;
      if (req.body) {
        const song = await Song.update(req.body, {
          where: {
            id,
          },
        });
        if (song[0] === 1) {
          res.status(200).send({
            error: false,
            song: req.body,
          });
          return;
        }
      }
      res.status(404).send({
        error: true,
        messages: ['No song found with the given id'],
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
