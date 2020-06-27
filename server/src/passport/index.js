const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const {
  User,
} = require('../models');
const config = require('../config');

passport.use(
  new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt.JWT_SECRET,
  }, (async (jwtPayload, done) => {
    try {
      const user = await User.findOne({
        where: {
          id: jwtPayload.id,
        },
      });
      if (!user) {
        return done(new Error(), false);
      }
      return done(null, user);
    } catch (err) {
      console.error(err);
      return done(new Error(), false);
    }
  })),
);

module.exports = null;
