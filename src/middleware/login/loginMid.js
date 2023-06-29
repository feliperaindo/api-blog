const utils = require('../../utils/validators');

function validateFields(request, __response, next) {
  try {
    utils.existLoginFields(request.body);
    utils.validateEmail(request.body.email);
    utils.validatePassword(request.body.password);
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { validateFields };