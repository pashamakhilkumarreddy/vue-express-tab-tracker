const path = require('path');

require('dotenv').config();

module.exports = {
  server: {
    PORT: process.env.PORT || 3000,
  },
  db: {
    DB_NAME: process.env.DB_NAME || 'tabtracker',
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.DB_HOST || 'localhost',
      storage: path.resolve(__dirname, '../../tabtracker.sqlite'),
    },
  },
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET || 'secretsecretdude',
  },
};
