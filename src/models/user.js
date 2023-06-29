module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { tableName: 'user', underscored: true, timestamps: false });

  User.associate = ({ blogPost }) => User.hasMany(blogPost, { foreignKey: 'userId' });

  return User;
};
