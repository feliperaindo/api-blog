// Fonte da verdade
const { errorMessages, http } = require('../../SSOT/exporter');

// Utils
const { getBlogPost, getUserId } = require('./getters');

// Models
const models = require('../../models');

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

module.exports = { deleteBlogPost };