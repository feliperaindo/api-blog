// Fonte da verdade
const { http } = require('../../SSOT/exporter');

// util
const jwt = require('../../utils/JWT/jwtManager');

// Service
const service = require('../../service/exporter');

async function registerPost(request, response, next) {
  try {
    const user = jwt.decodeToken(request.headers.authorization);
    const successRegister = await service.post.blogPostManager(request.body, user);
    return response.status(http.CREATED).send(successRegister);
  } catch (error) {
    next(error);
  }
}

async function allPosts(request, response) {
  const user = jwt.decodeToken(request.headers.authorization);
  const all = await service.post.getAll(user);
  return response.status(http.OK).send(all);
}

async function postById(request, response, next) {
  try {
    const user = jwt.decodeToken(request.headers.authorization);
    const byId = await service.post.getById(user, request.params.id);
    return response.status(http.OK).send(byId);
  } catch (error) {
    next(error);
  }
}

async function updatePost(request, response) {
  return { request, response };
}

async function deletePost(request, response) {
  return { response, request };
}

async function searchPostByTerm(request, response) {
  return { request, response };
}

module.exports = {
  allPosts,
  postById,
  updatePost,
  deletePost,
  registerPost,
  searchPostByTerm,
};