module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { modelName: 'user', underscored: true });
  return User;
};