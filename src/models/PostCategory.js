module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory', 
    { postId: DataTypes.INTEGER, categoryId: DataTypes.INTEGER },
    { underscored: true, tableName: 'posts_categories' },
  );

  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(
      Category,
      { through: PostCategory, as: 'categories', foreignKey: 'postId', otherKey: 'categoryId' },
    );
    Category.belongsToMany(
      BlogPost,
      { through: PostCategory, as: 'posts', foreignKey: 'categoryId', otherKey: 'postId' },
    );
    PostCategory.belongsTo(BlogPost, { foreignKey: 'id' });
    PostCategory.belongsTo(Category, { foreignKey: 'id' });
  };
  
  return PostCategory;
};