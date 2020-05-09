const jwt = require('jsonwebtoken');
const _ = require('lodash');

const { User } = require('../models');

const config = require('../config');

const JWTSignUser = (user) => {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.jwt.JWT_SECRET, {
    expiresIn: ONE_WEEK,
  });
};

const pickUserProps = (user) => _.pick(user, ['id', 'email']);

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      if (user) {
        res.status(200).send({
          error: false,
          messages: [
            pickUserProps(user.toJSON()),
          ],
        });
        return;
      }
      res.status(404).send({
        error: true,
        messages: [
          'Unable to create the user',
        ],
      });
      return;
    } catch (err) {
      console.error(err);
      res.status(400).send({
        error: true,
        messages: [
          'This email account is already in use',
        ],
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      console.log(user);
      if (!user) {
        res.status(403).send({
          error: 'The login information is incorrect',
        });
        return;
      }
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        res.status(403).send({
          error: 'The login information is incorrect',
        });
        return;
      }
      const userJSON = user.toJSON();
      res.status(200).send({
        error: false,
        user: pickUserProps(userJSON),
        token: JWTSignUser(userJSON),
      });
    } catch (err) {
      console.error(err);
      res.status(403).send({
        error: 'Internal server error',
      });
    }
  },
};
