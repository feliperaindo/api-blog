const { model } = require('../SSOT/exporter');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(model.USER_MODEL, {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { underscored: true, timestamps: false });

  User.associate = ({ BlogPost }) => User.hasMany(BlogPost, { foreignKey: model.USER_ID });

  return User;
};
