// Fonte da verdade
const { errorMessages, http } = require('../../SSOT/exporter');

// Json Web Token manager
const jwtManager = require('../../utils/JWT/jwtManager');

// Models
const { User } = require('../../models');

async function getUserByEmail(email) {
  return User.findOne({ where: { email } });
}

async function postUser(info) {
  const { email, password, displayName } = info;
  const image = info.image || null;

  const user = await getUserByEmail(email);

  if (user === null) {
    const newUser = await User.create({ displayName, password, email, image });
    return { token: jwtManager.createToken(email, password), newUser };
  }
  throw new Error(errorMessages.USER_REGISTERED, { cause: http.CONFLICT });
}

module.exports = { postUser, getUserByEmail };