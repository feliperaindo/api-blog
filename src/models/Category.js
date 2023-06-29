module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, { underscored: true, timestamps: false });

  Category.associate = ({ PostCategory }) => Category.hasMany(PostCategory, {
    foreignKey: 'categoryId' });

  return Category;
};