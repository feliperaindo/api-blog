const { model } = require('../SSOT/exporter');

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(model.CATEGORY_MODEL, {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  }, { underscored: true, timestamps: false });

  Category.associate = ({ PostCategory }) => Category.hasMany(PostCategory, {
    foreignKey: model.CATEGORY_ID });

  return Category;
};