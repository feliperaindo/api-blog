// Fonte da verdade
const { errorMessages, http } = require('../../SSOT/exporter');

// Json Web Token
const jwtManager = require('../../utils/JWT/jwtManager');

// Models
const { User } = require('../../models');

async function logInUser(email, password) {
  const user = await User.findOne({ where: { email } });
  
  if (user === null) {
    throw new Error(errorMessages.INVALID_FIELDS, { cause: http.BAD_REQUEST });
  }

  if (user.password === password) {
    return { token: jwtManager.createToken(email, password) };
  }
  throw new Error(errorMessages.INVALID_FIELDS, { cause: http.BAD_REQUEST });
}

module.exports = { logInUser };