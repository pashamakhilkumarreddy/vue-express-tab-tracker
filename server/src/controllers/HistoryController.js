const _ = require('lodash');

const {
  History,
  Song,
} = require('../models');

module.exports = {
  async getRecentlyViewedSongs(req, res) {
    try {
      const {
        id: userId,
      } = req.user;
      const histories = await History.findAll({
        where: {
          UserId: userId,
        },
        include: [{
          model: Song,
        }],
      }).map((history) => history.toJSON())
        .map((history) => _.extend({},
          history.Song, history));
      res.status(200).send({
        error: false,
        histories: _.uniqBy(histories, (history) => history.SongId),
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: true,
        messages: [
          'Internal server error',
        ],
      });
    }
  },
  async setSongAsRecentlyViewed(req, res) {
    try {
      const {
        id: userId,
      } = req.user;
      const {
        songId,
      } = req.body;
      const history = await History.create({
        SongId: songId,
        UserId: userId,
      });
      res.status(201).send({
        error: false,
        history,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: true,
        messages: [
          'Internal server error',
        ],
      });
    }
  },
};
