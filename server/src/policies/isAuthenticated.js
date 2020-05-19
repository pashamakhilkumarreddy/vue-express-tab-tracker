const passport = require('passport');

module.exports = function (req, res, next) {
  passport.authenticate('jwt', (err, user) => {
    if (err) {
      res.status(403).send({
        error: false,
        messages: [
          'You are not authorized to this resource',
        ],
      });
    } else {
      req.user = user;
      next();
    }
  })(req, res, next);
};
