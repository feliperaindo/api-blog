module.exports = {
  up: async (queryInterface, Sequelize) => 
    queryInterface.createTable('categories', {
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
  down: async (queryInterface, __Sequelize) => queryInterface.dropTable('categories'),
};