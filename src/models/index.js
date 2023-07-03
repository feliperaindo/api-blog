const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

// Fonte da verdade
const { model } = require('../SSOT/exporter');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || model.NODE_ENV;
const config = require(`${__dirname}${model.CONFIG_PATH}`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file) => (
    file.indexOf(model.DOT) !== 0) 
    && (file !== basename) 
    && (file.slice(model.NEGATIVE_THREE) === model.EXTENSION_JS))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
