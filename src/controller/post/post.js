// Fonte da verdade
const { http } = require('../../SSOT/exporter');

// util
const jwt = require('../../utils/JWT/jwtManager');

// Service
const { post } = require('../../service/exporter');

async function registerPost(request, response, next) {
  try {
    const user = jwt.decodeToken(request.headers.authorization);
    const successRegister = await post.posters.blogPostManager(request.body, user);
    return response.status(http.CREATED).send(successRegister);
  } catch (error) {
    next(error);
  }
}

async function allPosts(request, response) {
  const user = jwt.decodeToken(request.headers.authorization);
  const all = await post.getters.getAll(user);
  return response.status(http.OK).send(all);
}

async function postById(request, response, next) {
  try {
    const user = jwt.decodeToken(request.headers.authorization);
    const byId = await post.getters.getById(user, request.params.id);
    return response.status(http.OK).send(byId);
  } catch (error) {
    next(error);
  }
}

async function updatePost(request, response, next) {
  try {
   const user = jwt.decodeToken(request.headers.authorization);
   const postUpdated = await post.puts.putBlogPost(
    request.params.id,
    request.body,
    user,
    );
   return response.status(http.OK).send(postUpdated);
  } catch (error) {
    next(error);
  }
}

async function deletePost(request, response, next) {
  try {
    const user = jwt.decodeToken(request.headers.authorization);
    await post.deletes.deleteBlogPost(request.params.id, user);
    return response.status(http.NO_CONTENT).send();
  } catch (error) {
    next(error);
  }
}

async function searchPostByTerm(request, response) {
  const user = jwt.decodeToken(request.headers.authorization);
  const searchResult = await post.getters.getBySearch(request.query.q, user);
  return response.status(http.OK).send(searchResult);
}

module.exports = {
  allPosts,
  postById,
  updatePost,
  deletePost,
  registerPost,
  searchPostByTerm,
};