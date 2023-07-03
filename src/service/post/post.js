// Fonte da verdade
const { constants } = require('../../SSOT/exporter');

// Utils
const utils = require('../../utils/validators');

// Models
const models = require('../../models');

async function getAll({ email }) {
  return models.BlogPost.findAll(
    {
      include: [
        {
          model: models.User,
          as: 'user',
          where: { email },
          attributes: { exclude: [constants.PASSWORD_FIELD] },
        },
        {
          model: models.Category,
          as: 'categories',
          through: { attributes: [] },
        },
      ],
    },
  );
}

async function getUseId(email, password, transaction) {
  return models.User.findOne({
    where: { email, password },
    attributes: [constants.ID],
    transaction,
  });
}

async function createBlogPost(title, content, userId, transaction) {
  return models.BlogPost.create({ title, content, userId }, { transaction });
}

async function addCategories(categories, postId, transaction) {
  return models.PostCategory.bulkCreate(
    categories.map((categoryId) => ({ postId, categoryId })),
    { transaction },
  );
}

async function getBlogPost(id, transaction) {
  return models.BlogPost.findByPk(id, { transaction, raw: true });
}

async function blogPostManager({ content, title, categoryIds }, { email, password }) {
  const allCategories = await models.Category.findAll({ attributes: [constants.ID] });

  utils.validateCategoryIds(allCategories, categoryIds);

  return models.sequelize.transaction(async (newPost) => {
    const { id } = await getUseId(email, password, newPost);

    const blogPost = await createBlogPost(title, content, id, newPost);

    await addCategories(categoryIds, blogPost.null, newPost);

    return getBlogPost(blogPost.null, newPost);
  });
}

module.exports = { getAll, blogPostManager };