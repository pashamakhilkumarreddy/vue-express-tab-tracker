const express = require('express');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

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

app.use(express.urlencoded({
  extended: true,
}));

require('./passport');

require('./routes')(app);

sequelize.sync({
  force: false,
}).then(() => {
  app.listen(PORT, () => {
    console.info(`The server is up and running on ${PORT}`);
  });
});
