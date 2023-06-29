// Utils
const utils = require('../../utils/validators');

function tokenValidator(request, __response, next) {
  try {
    utils.existTokenField(request.headers);
    utils.validateToken(request.headers.authorization);
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { tokenValidator };