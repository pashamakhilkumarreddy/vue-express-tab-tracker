const AuthenticationController = require('./AuthenticationController');
const SongsController = require('./SongsController');
const BookmarksController = require('./BookmarksController');

module.exports = {
  ...AuthenticationController,
  ...SongsController,
  ...BookmarksController,
};
