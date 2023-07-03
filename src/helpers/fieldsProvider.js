const { fields } = require('../SSOT/exporter');

function loginFields() {
  return [fields.EMAIL, fields.PASSWORD];
}

function userFields() {
  const { DISPLAY, EMAIL, PASSWORD } = fields;
  return [DISPLAY, EMAIL, PASSWORD];
}

function postFields() {
  const { TITLE, CONTENT, CATEGORY_IDS } = fields;
  return [TITLE, CONTENT, CATEGORY_IDS];
}

function postPutFields() {
  return [fields.TITLE, fields.CONTENT];
}

module.exports = { loginFields, userFields, postFields, postPutFields };