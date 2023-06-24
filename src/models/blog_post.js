module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('blog_post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    userId: DataTypes.INTEGER,
  }, { modelName: 'blog_post', underscored: true });
  return BlogPost;
};