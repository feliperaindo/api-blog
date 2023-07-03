// fonte da verdade
const { sequelize } = require('../SSOT/exporter');

const environment = process.env.NODE_ENV || sequelize.ENVIRONMENT;

const suffix = {
  dev: sequelize.SUFFIX_DEV,
  development: sequelize.SUFFIX_DEV,
  test: sequelize.SUFFIX_TEST,
};

const options = {
  host: process.env.MYSQL_HOST || sequelize.HOST,
  port: process.env.MYSQL_PORT || sequelize.PORT,
  database: 
    `${process.env.MYSQL_DB_NAME || sequelize.DATABASE}${suffix[environment] || suffix.test}`,
  username: process.env.MYSQL_USER || sequelize.USERNAME,
  password: process.env.MYSQL_PASSWORD || sequelize.PASSWORD,
  dialect: sequelize.DIALECT,
  dialectOptions: {
    timezone: sequelize.TIMEZONE,
  },
  logging: process.env.DEBUG !== sequelize.LOGGING,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
};
