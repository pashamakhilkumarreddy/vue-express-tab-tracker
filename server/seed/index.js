const Promise = require('bluebird');

const {
  sequelize,
  Song,
  User,
  Bookmark,
  History,
} = require('../src/models');

const {
  songs,
  users,
  bookmarks,
  histories
} = require('./data');

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

    await Promise.all(
      histories.map(async (history) => {
        await History.create(history);
      })
    )
  }).catch(err => {
    console.error(err);
  });