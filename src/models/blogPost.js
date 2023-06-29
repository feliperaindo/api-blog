module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('blog_post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { tableName: 'blogPost', underscored: true, timestamps: false });

  BlogPost.associate = ({ user, postCategory }) => {
    BlogPost.belongsTo(user, { foreignKey: 'id' });
    BlogPost.hasMany(postCategory, { foreignKey: 'postId' });
  };

  return BlogPost;
};
