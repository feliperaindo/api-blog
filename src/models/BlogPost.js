module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { underscored: true, timestamps: false });

  BlogPost.associate = ({ User, PostCategory }) => {
    BlogPost.belongsTo(User, { foreignKey: 'id' });
    BlogPost.hasMany(PostCategory, { foreignKey: 'postId' });
  };

  return BlogPost;
};
