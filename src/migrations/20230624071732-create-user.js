const { migration } = require('../SSOT/exporter');

module.exports = {
  up: async (queryInterface, Sequelize) => 
    queryInterface.createTable(migration.USERS, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      displayName: {
        field: migration.DISPLAY_NAME,
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    }),
  down: async (queryInterface, __Sequelize) => queryInterface.dropTable(migration.USERS),
};