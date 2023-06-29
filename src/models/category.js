module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    name: DataTypes.STRING,
  }, { tableName: 'category', underscored: true, timestamps: false });

  Category.associate = ({ postCategory }) => Category.hasMany(postCategory, {
    foreignKey: 'categoryId' });

  return Category;
};