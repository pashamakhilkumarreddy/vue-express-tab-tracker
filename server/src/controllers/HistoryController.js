const _ = require('lodash');

const {
  Bookmark,
  Song,
} = require('../models');

module.exports = {
  async getBookmarks(req, res) {
    try {
      const {
        songId,
        userId,
      } = req.query;
      const whereCondition = {
        UserId: userId,
      };
      if (songId) {
        whereCondition.SongId = songId;
      }
      const bookmarks = await Bookmark.findAll({
        where: whereCondition,
        include: [{
          model: Song,
        }],
      }).map((bookmark) => bookmark.toJSON())
        .map((bookmark) => _.extend({}, bookmark.Song, bookmark));
      res.status(200).send({
        error: false,
        bookmarks: bookmarks || false,
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
  async addBookmark(req, res) {
    try {
      const {
        songId,
        userId,
      } = req.body.params;
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId,
        },
      });
      if (bookmark) {
        res.status(400).send({
          error: true,
          messages: [
            'You already have set this as a bookmark',
          ],
        });
        return;
      }
      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId,
      });
      res.status(201).send({
        error: false,
        bookmark: newBookmark,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: true,
        messages: ['Internal server error'],
      });
    }
  },
  async deleteBookmark(req, res) {
    try {
      const userId = req.user.id;
      const {
        id: bookmarkId,
      } = req.params;
      const bookmark = await Bookmark.findByOne({
        where: {
          id: bookmarkId,
          UserId: userId,
        },
      });
      if (!bookmark) {
        res.status(403).send({
          error: true,
          messages: [
            'You are not authorized to delete this bookmark',
          ],
        });
        return;
      }
      await bookmark.destroy();
      res.status(200).send({
        error: false,
        messages: [
          'Successfully deleted the bookmark',
        ],
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
