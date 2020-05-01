const router = require('express').Router();

const {
  AuthenticationController,
} = require('../controllers');

const { AuthenticationControllerPolicy } = require('../policies');

router.post('/login', AuthenticationController.login);

router.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register);

module.exports = router;
