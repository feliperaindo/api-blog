module.exports = (sequelize, __DataTypes) => {
  const PostCategory = sequelize.define(
    'postCategory', 
    {},
    { underscored: true, tableName: 'posts_categories' },
  );

  PostCategory.associate = ({ blogPost, category }) => {
    blogPost.belongsToMany(
      category,
      { through: PostCategory, as: 'categories', foreignKey: 'postId', otherKey: 'categoryId' },
    );
    category.belongsToMany(
      blogPost,
      { through: PostCategory, as: 'posts', foreignKey: 'categoryId', otherKey: 'postId' },
    );
    PostCategory.belongsTo(blogPost, { foreignKey: 'id' });
    PostCategory.belongsTo(category, { foreignKey: 'id' });
  };
  
  return PostCategory;
};