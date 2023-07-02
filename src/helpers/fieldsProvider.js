const { constants } = require('../SSOT/exporter');

function loginFields() {
  return [constants.EMAIL_FIELD, constants.PASSWORD_FIELD];
}

function userFields() {
  const { DISPLAY_FIELD, EMAIL_FIELD, PASSWORD_FIELD } = constants;
  return [DISPLAY_FIELD, EMAIL_FIELD, PASSWORD_FIELD];
}

function postFields() {
  const { TITLE_FIELD, CONTENT_FIELD } = constants;
  return [TITLE_FIELD, CONTENT_FIELD];
}

module.exports = { loginFields, userFields, postFields };