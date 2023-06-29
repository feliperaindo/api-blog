// Fonte da verdade
const { http } = require('../../SSOT/exporter');

// Service
const service = require('../../service/exporter');

async function logIn(request, response, next) {
  const { email, password } = request.body;

  try {
    const token = await service.login.logInUser(email, password);
    return response.status(http.OK).send(token);
  } catch (error) {
    next(error);
  }
}

module.exports = { logIn };