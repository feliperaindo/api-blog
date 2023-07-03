const { model } = require('../SSOT/exporter');

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    model.POST_CATEGORY_MODEL,
    { postId: DataTypes.INTEGER, categoryId: DataTypes.INTEGER },
    { underscored: true, tableName: model.POST_CATEGORY_TABLE },
  );

  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(
      Category, 
      {
        through: PostCategory,
        as: model.CATEGORY_ALIAS,
        foreignKey: model.POST_ID,
        otherKey: model.CATEGORY_ID,
      },
    );

    Category.belongsToMany(
      BlogPost,
      { 
        through: PostCategory,
        as: model.BLOG_POST_ALIAS,
        foreignKey: model.CATEGORY_ID,
        otherKey: model.POST_ID,
      },
    );
    
    PostCategory.belongsTo(BlogPost, { foreignKey: model.DEFAULT });
    PostCategory.belongsTo(Category, { foreignKey: model.DEFAULT });
  };
  
  return PostCategory;
};