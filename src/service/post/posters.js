// Fonte da verdade
const { model } = require('../../SSOT/exporter');

// Utils
const utils = require('../../utils/validators');
const { getUserId, getBlogPost } = require('./getters');

// Models
const models = require('../../models');

// Posts
async function createBlogPost(title, content, userId, transaction) {
  return models.BlogPost.create({ title, content, userId }, { transaction });
}

async function addCategories(categories, postId, transaction) {
  return models.PostCategory.bulkCreate(
    categories.map((categoryId) => ({ postId, categoryId })),
    { transaction },
  );
}

async function blogPostManager({ content, title, categoryIds }, { email, password }) {
  const allCategories = await models.Category.findAll({ attributes: [model.DEFAULT] });

  utils.validateCategoryIds(allCategories, categoryIds);

  return models.sequelize.transaction(async (newPost) => {
    const { id } = await getUserId(email, password, newPost);

    const blogPost = await createBlogPost(title, content, id, newPost);

    await addCategories(categoryIds, blogPost.null, newPost);

    return getBlogPost(blogPost.null, newPost);
  });
}

module.exports = { blogPostManager };