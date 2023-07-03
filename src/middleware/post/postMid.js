// Fonte da verdade
const { fields } = require('../../SSOT/exporter');

// utils
const utils = require('../../utils/validators');

function validadeFields(request, __response, next) {
  try {
    utils.existFields(request.body, fields.POST);
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { validadeFields };