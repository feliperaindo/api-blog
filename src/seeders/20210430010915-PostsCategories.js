const { migration } = require('../SSOT/exporter');

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert(
    migration.POSTS_CATEGORIES,
    [
      { post_id: 1, category_id: 1 },
      { post_id: 2, category_id: 2 },
    ],
    { timestamps: false },
),
  down: async (queryInterface, _Sequelize) => 
    queryInterface.bulkDelete(migration.POSTS_CATEGORIES, null, {}),
};
