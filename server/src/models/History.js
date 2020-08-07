module.exports = (sequelize, DataTypes) => { // eslint-disable-line no-unused-vars
  const History = sequelize.define('History', {});

  History.associate = function associate(models) {
    History.belongsTo(models.User);
    History.belongsTo(models.Song);
  };
  return History;
};
