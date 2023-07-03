const { model } = require('../SSOT/exporter');

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(model.BLOG_POST_MODEL, {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { underscored: true, timestamps: false });

  BlogPost.associate = ({ User, PostCategory }) => {
    BlogPost.belongsTo(User, { foreignKey: model.DEFAULT, as: model.USER_ALIAS });
    BlogPost.hasMany(PostCategory, { foreignKey: model.POST_ID });
  };

  return BlogPost;
};
