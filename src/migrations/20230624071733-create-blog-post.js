const { migration } = require('../SSOT/exporter');

module.exports = {
  up: async (queryInterface, Sequelize) => 
    queryInterface.createTable(migration.BLOG_POSTS, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      published: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(migration.TIMESTAMP),
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(migration.TIMESTAMP_UPDATE),
      },
      userId: {
        field: migration.USER_ID,
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: migration.CASCADE,
        onDelete: migration.CASCADE,
        references: {
          model: migration.USERS,
          key: migration.DEFAULT,
        },
      },
    }),
  down: async (queryInterface, __Sequelize) => queryInterface.dropTable(migration.BLOG_POSTS),
};