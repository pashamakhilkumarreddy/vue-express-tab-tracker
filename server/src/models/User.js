const bcrypt = require('bcryptjs');

const hashPassword = (user) => {
  const SALT_FACTOR = 10;
  if (!user.changed('password')) {
    return;
  }
  return bcrypt.hash(user.password, SALT_FACTOR) // eslint-disable-line consistent-return
    .then((hash) => {
      user.setDataValue('password', hash);
    });
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
      // beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword,
    },
  });
  User.prototype.comparePassword = async function comparePassword(password) {
    await bcrypt.compare(password, this.password);
  };
  // User.associate = function associate(models) {}
  return User;
};
