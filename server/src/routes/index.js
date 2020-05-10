const auth = require('./auth');
const songs = require('./songs');

module.exports = (app) => {
  app.use('/', auth);
  app.use('/', songs);
};
