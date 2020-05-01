const { User } = require('../models');

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(200).send({
        error: false,
        messages: [
          user.toJSON(),
        ],
      });
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
      console.log(res, res);
    } catch (err) {
      console.error(err);
    }
  },
};
