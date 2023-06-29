module.exports = {
  up: async (queryInterface, Sequelize) => 
    queryInterface.createTable('posts_categories', {
      postId: {
        field: 'post_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { models: 'blog_posts', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      categoryId: {
        field: 'category_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { models: 'categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,        
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: async (queryInterface, __Sequelize) => queryInterface.dropTable('posts_categories'),
};