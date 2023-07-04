// Fonte da verdade
const { errorMessages, http } = require('../../SSOT/exporter');

// Utils
const { getUserId, getBlogPost, getById } = require('./getters');

// Models
const models = require('../../models');

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

module.exports = { putBlogPost };