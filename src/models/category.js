module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    name: DataTypes.STRING,
  }, { modelName: 'category', underscored: true });
  return Category;
};
