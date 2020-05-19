const AuthenticationController = require('./AuthenticationController');
const SongsController = require('./SongsController');
const BookmarksController = require('./BookmarksController');
const HistoryController = require('./HistoryController');

module.exports = {
  ...AuthenticationController,
  ...SongsController,
  ...BookmarksController,
  ...HistoryController,
};
