module.exports = (sequelize, DataTypes) => 
  sequelize.define('category', {
    name: DataTypes.STRING,
  }, { modelName: 'category', underscored: true, timestamps: false });
