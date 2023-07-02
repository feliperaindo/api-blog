// Fonte da verdade
const { constants } = require('../../SSOT/exporter');

// utils
const utils = require('../../utils/validators');

function validadeFields(request, __response, next) {
  try {
    utils.existFields(request.body, constants.POST);
  } catch (error) {
    next(error);
  }
}

module.exports = { validadeFields };