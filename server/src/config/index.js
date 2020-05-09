require('dotenv').config();

module.exports = {
  server: {
    PORT: parseInt(process.env.PORT, 10),
  },
  db: {
    DB_NAME: process.env.DB_NAME || 'tabtracker',
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    options: {
      dialect: process.env.DIALECT,
      host: process.env.DB_HOST || 'localhost',
      storage: './tabtracker.sqlite',
    },
  },
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET || 'secretsecretdude',
  },
};
