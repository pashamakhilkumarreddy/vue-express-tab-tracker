const Joi = require('@hapi/joi');

module.exports = {
  register(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/)), // eslint-disable-line no-useless-escape
    });
    const {
      error,
    } = schema.validate(req.body);
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: true,
            messages: [
              'Please provide a valid email address',
            ],
          });
          break;
        case 'password':
          res.status(400).send({
            error: true,
            messages: [
              'Please provide a valid password',
            ],
          });
          break;
        default:
          res.status(400).send({
            error: true,
            messages: [
              'Invalid registration information',
            ],
          });
      }
    } else {
      next();
    }
  },
};
