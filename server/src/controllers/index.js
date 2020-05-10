const AuthenticationController = require('./AuthenticationController');
const SongsController = require('./SongsController');

module.exports = {
  ...AuthenticationController,
  ...SongsController,
};
