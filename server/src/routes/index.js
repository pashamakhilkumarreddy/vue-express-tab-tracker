const auth = require('./auth');
const songs = require('./songs');
const bookmarks = require('./bookmarks');
const history = require('./history');

module.exports = ({ app }) => {
  app.use('/', auth);
  app.use('/', songs);
  app.use('/', bookmarks);
  app.use('/', history);
};
