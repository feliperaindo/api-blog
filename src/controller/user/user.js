// Fonte da verdade
const { http } = require('../../SSOT/exporter');

// util
const jwt = require('../../utils/JWT/jwtManager');

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

async function userById(request, response, next) {
  try {
    const user = await service.user.getUserById(request.params.id);
    return response.status(http.OK).send(user);
  } catch (error) {
    next(error);
  }
}

async function deleteMe(request, response) {
  const user = jwt.decodeToken(request.headers.authorization);
  await service.user.deleteMe(user);
  return response.status(http.NO_CONTENT).send();
}

module.exports = { registerUser, allUsers, userById, deleteMe };