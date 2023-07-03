const { migration } = require('../SSOT/exporter');

module.exports = {
  up: async (queryInterface, Sequelize) => 
    queryInterface.createTable(migration.POSTS_CATEGORIES, {
      postId: {
        field: migration.POST_ID,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: migration.BLOG_POSTS, key: migration.DEFAULT },
        onUpdate: migration.CASCADE,
        onDelete: migration.CASCADE,
        primaryKey: true,
      },
      categoryId: {
        field: migration.CATEGORY_ID,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: migration.CATEGORIES, key: migration.DEFAULT },
        onUpdate: migration.CASCADE,
        onDelete: migration.CASCADE,
        primaryKey: true,        
      },
      createdAt: {
        field: migration.CREATED_AT,
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(migration.TIMESTAMP),
      },
      updatedAt: {
        field: migration.UPDATED_AT,
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(migration.TIMESTAMP_UPDATE),
      },
    }),
  down: async (queryInterface, __Sequelize) => queryInterface.dropTable(migration.POSTS_CATEGORIES),
};