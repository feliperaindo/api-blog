module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { modelName: 'user', underscored: true, timestamps: false });

  User.associate = ({ blogPost }) => User.hasMany(blogPost, { foreignKey: 'user_id' });

  return User;
};
