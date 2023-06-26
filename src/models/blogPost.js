module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('blog_post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { modelName: 'blogPost', underscored: true, timestamps: false });

  BlogPost.associate = ({ user }) => BlogPost.belongsTo(user, { foreignKey: 'id' });

  return BlogPost;
};
