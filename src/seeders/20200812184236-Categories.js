const { migration } = require('../SSOT/exporter');

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert(
    migration.CATEGORIES,
    [
      { id: 1, name: 'Inovação' },
      { id: 2, name: 'Escola' },
    ],
    { timestamps: false },
),
  down: async (queryInterface, _Sequelize) => 
    queryInterface.bulkDelete(migration.CATEGORIES, null, {}),
};
