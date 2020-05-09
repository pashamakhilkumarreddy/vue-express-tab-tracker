const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcryptjs'));

const hashPassword = (user) => {
  const SALT_FACTOR = 8;
  if (!user.changed('password')) {
    return;
  }
  return bcrypt.genSaltAsync(SALT_FACTOR) // eslint-disable-line consistent-return
    .then((salt) => bcrypt.hashAsync(user.password, salt))
    .then((hash) => user.setDataValue('password', hash));
};


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword,
    },
  });
  User.prototype.comparePassword = async function (password) {
    const isValidPassword = await bcrypt.compareAsync(password, this.password);
    console.log(isValidPassword);
    return isValidPassword;
  };
  // User.associate = function (models) {}
  return User;
};
