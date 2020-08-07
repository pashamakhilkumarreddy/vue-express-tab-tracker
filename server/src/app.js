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

app.use(cors())
  .use(compression())
  .use(helmet())
  .use(morgan('combined'))
  .use(express.json())
  .use(responseTime())
  .use(rateLimit({
    windowMs: 24 * 60 * 60 * 1000,
    max: 1000,
    message: 'Too many requests',
    headers: true,
  }))
  .use(express.urlencoded({
    extended: true,
  }))
  .use(require('express-status-monitor')({
    title: 'Server Status',
    path: '/status',
    spans: [{
      interval: 1,
      retention: 60,
    },
    {
      interval: 15,
      retention: 60,
    },
    {
      interval: 30,
      retention: 60,
    },
    ],
    chartVisibility: {
      cpu: true,
      mem: true,
      load: true,
      responseTime: true,
      rps: true,
      statusCodes: true,
    },
    healthChecks: [{
      protocol: 'http',
      host: 'localhost',
      path: '/',
      port: PORT,
    }],
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
