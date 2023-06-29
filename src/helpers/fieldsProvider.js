const { constants } = require('../SSOT/exporter');

function loginFields() {
  return [constants.EMAIL_FIELD, constants.PASSWORD_FIELD];
}

function userFields() {
  const { DISPLAY_FIELD, EMAIL_FIELD, PASSWORD_FIELD } = constants;
  return [DISPLAY_FIELD, EMAIL_FIELD, PASSWORD_FIELD];
}

module.exports = { loginFields, userFields };