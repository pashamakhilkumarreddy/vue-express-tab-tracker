const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const {
  sequelize
} = require('./models');
const config = require('./config');

const app = express();

const PORT = config.server.PORT || 3000;

app.use(helmet());

app.use(morgan('combined'));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
  extended: true,
}));

require('./routes')(app);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
  });
});
