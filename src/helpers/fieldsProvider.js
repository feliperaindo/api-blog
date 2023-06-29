const { constants } = require('../SSOT/exporter');

function loginFields() {
  return [constants.EMAIL_FIELD, constants.PASSWORD_FIELD];
}

module.exports = { loginFields };