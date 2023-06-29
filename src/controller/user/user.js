// Fonte da verdade
const { http } = require('../../SSOT/exporter');

// Service
const service = require('../../service/exporter');

async function registerUser(request, response, next) {
  try {
    const { token } = await service.user.postUser(request.body);
    return response.status(http.CREATED).send({ token });
  } catch (error) {
    next(error);
  }
}

async function allUsers(__request, response) {
  const all = await service.user.getAll();
  return response.status(http.OK).send(all);
}

async function userById(request, response) {
  return { request, response };
}

async function deleteMe(request, response) {
  return { request, response };
}

module.exports = { registerUser, allUsers, userById, deleteMe };