const { migration } = require('../SSOT/exporter');

module.exports = {
  up: async (queryInterface, Sequelize) => 
    queryInterface.createTable(migration.CATEGORIES, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }),
  down: async (queryInterface, __Sequelize) => queryInterface.dropTable(migration.CATEGORIES),
};