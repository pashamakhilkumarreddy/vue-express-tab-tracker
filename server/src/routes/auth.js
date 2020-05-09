const router = require('express').Router();

const {
  login,
  register,
} = require('../controllers');

const {
  AuthenticationControllerPolicy,
} = require('../policies');

router.post('/login', login);

router.post('/register', AuthenticationControllerPolicy.register, register);

module.exports = router;
