const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const responseTime = require('response-time');
const rateLimit = require('express-rate-limit');

const {
  sequelize,
} = require('./models');
const config = require('./config');

const app = express();

const {
  PORT,
} = config.server;

app.use(cors());
app.use(compression());
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(responseTime());
app.use(rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 1000,
  message: 'Too many requests',
  headers: true,
}));

app.use(express.urlencoded({
  extended: true,
}));

require('./passport');

require('./routes')({
  app,
});

sequelize.sync({
  force: false,
}).then(() => {
  console.info('Successfully connected to the database');
  app.listen(PORT, () => {
    console.info(`The server is up and running on ${PORT}`);
  });
});
