const utils = require('../../utils/validators');

function validadeFields(request, __response, next) {
  try {
    utils.existCategoryFields(request.body);
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { validadeFields };