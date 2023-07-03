// Fonte da verdade
const { fields } = require('../../SSOT/exporter');

// utils
const utils = require('../../utils/validators');

function validateFields(request, __response, next) {
  try {
    utils.existFields(request.body, fields.LOGIN);
    utils.validateEmail(request.body.email);
    utils.validatePassword(request.body.password);
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { validateFields };