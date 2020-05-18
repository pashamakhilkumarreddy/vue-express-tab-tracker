const auth = require('./auth');
const songs = require('./songs');
const bookmarks = require('./bookmarks');

module.exports = (app) => {
  app.use('/', auth);
  app.use('/', songs);
  app.use('/', bookmarks);
};
