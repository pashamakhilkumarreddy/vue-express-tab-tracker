const Promise = require('bluebird');

const {
  sequelize,
  Song,
  User,
  Bookmark,
} = require('../src/models');

const {
  songs
} = require('./songs');
const {
  users
} = require('./users');
const {
  bookmarks
} = require('./bookmarks');

sequelize.sync({
    force: true,
  })
  .then(async () => {
    await Promise.all(
      users.map(async (user) => {
        await User.create(user);
      }),
    );

    await Promise.all(
      songs.map(async (song) => {
        await Song.create(song);
      })
    );

    await Promise.all(
      bookmarks.map(async (bookmark) => {
        await Bookmark.create(bookmark);
      })
    );
  }).catch(err => {
    console.error(err);
  });