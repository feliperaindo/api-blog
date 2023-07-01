module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  }, { underscored: true, timestamps: false });

  Category.associate = ({ PostCategory }) => Category.hasMany(PostCategory, {
    foreignKey: 'categoryId' });

  return Category;
};