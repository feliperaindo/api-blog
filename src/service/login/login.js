// Fonte da verdade
const { errorMessages, http } = require('../../SSOT/exporter');

// Json Web Token
const jwtManager = require('../../utils/JWT/jwtManager');

// Models
const { User } = require('../../models');

async function logInUser(email, password) {
  const user = await User.findOne({ where: { email, password } });
  
  if (user === null) {
    throw new Error(errorMessages.INVALID_FIELDS, { cause: http.BAD_REQUEST });
  }

  return { token: jwtManager.createToken(email, password) };
}

module.exports = { logInUser };