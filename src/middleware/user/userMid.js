// Fonte da verdade
const { fields } = require('../../SSOT/exporter'); 

// Utils
const utils = require('../../utils/validators');

function validadeFields(request, __response, next) {
  try {
    utils.existFields(request.body, fields.USER);
    const { email, password, displayName } = request.body;
    utils.validateEmail(email);
    utils.validatePassword(password);
    utils.validateDisplay(displayName);
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { validadeFields };