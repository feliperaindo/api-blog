// Fonte da verdade
const { model, fields, errorMessages, http } = require('../../SSOT/exporter');

// Utils
const utils = require('../../utils/validators');

// Models
const models = require('../../models');

// Gets
async function getAll({ email }) {
  return models.BlogPost.findAll(
    {
      include: [
        {
          model: models.User,
          as: model.USER_ALIAS,
          where: { email },
          attributes: { exclude: [fields.PASSWORD] },
        },
        {
          model: models.Category,
          as: model.CATEGORY_ALIAS,
          through: { attributes: [] },
        },
      ],
    },
  );
}

async function getById({ email }, id, transaction = null) {
  const post = await models.BlogPost.findByPk(id, { transaction,
    include: 
    [{
        model: models.User,
        as: model.USER_ALIAS,
        where: { email },
        attributes: { exclude: [fields.PASSWORD] },
      },
      { 
        model: models.Category,
        as: model.CATEGORY_ALIAS,
        through: { attributes: [] }, 
    }],
  });

  if (post === null) {
    throw new Error(errorMessages.POST_NOT_FOUND, { cause: http.NOT_FOUND });
  }
  return post;
}

async function getBlogPost(id, transaction = null) {
  return models.BlogPost.findByPk(id, { transaction, raw: true });
}

async function getUserId(email, password, transaction = null) {
  return models.User.findOne({
    where: { email, password },
    attributes: [model.DEFAULT],
    transaction,
  });
}

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

// Puts
async function updateBlogPost(title, content, id, transaction = null) {
  return models.BlogPost.update({ title, content }, { where: { id }, transaction });
}

async function putBlogPost(id, { title, content }, { email, password }) {
  const loggedUser = await getUserId(email, password);
  const blogPost = await getBlogPost(id);

  if (blogPost.userId !== loggedUser.id) {
    throw new Error(errorMessages.USER_UNAUTHORIZED, { cause: http.UNAUTHORIZED });
  }

  return models.sequelize.transaction(async (updatePost) => {
    await updateBlogPost(title, content, id, updatePost);

    return getById({ email }, id, updatePost);
  });
}

// Delete
async function deleteBlogPost(id, { email, password }) {
  const blogPost = await getBlogPost(id);

  if (blogPost === null) {
    throw new Error(errorMessages.POST_NOT_FOUND, { cause: http.NOT_FOUND });
  }

  const loggedUser = await getUserId(email, password);
  
  if (blogPost.userId !== loggedUser.id) {
    throw new Error(errorMessages.USER_UNAUTHORIZED, { cause: http.UNAUTHORIZED });
  }

  return models.BlogPost.destroy({ where: { id } });
}

module.exports = { getAll, getById, putBlogPost, blogPostManager, deleteBlogPost };