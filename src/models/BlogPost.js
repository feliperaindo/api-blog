module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { underscored: true, timestamps: false });

  BlogPost.associate = ({ User, PostCategory }) => {
    BlogPost.belongsTo(User, { foreignKey: 'id', as: 'user' });
    BlogPost.hasMany(PostCategory, { foreignKey: 'postId' });
  };

  return BlogPost;
};
