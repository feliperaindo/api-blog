const utils = require('../../utils/validators');

function validateFields(request, response, next) {
  try {
    utils.existLoginFields(request.body);
    utils.validateEmail(request.body.email);
    utils.validatePassword(request.body.password);
    next();
  } catch (error) {
    next(error);
  }
  return { request, response, next };
}

module.exports = { validateFields };