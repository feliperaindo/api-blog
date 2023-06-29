module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert(
    'categories',
    [
      { id: 1, name: 'Inovação' },
      { id: 2, name: 'Escola' },
    ],
    { timestamps: false },
),
  down: async (queryInterface, _Sequelize) => 
    queryInterface.bulkDelete('categories', null, {}),
};
