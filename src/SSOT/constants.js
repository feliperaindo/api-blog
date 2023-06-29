// Fields
const EMAIL_FIELD = 'email';
const IMAGE_FIELD = 'image';
const TOKEN_FIELD = 'authorization';
const DISPLAY_FIELD = 'displayName';
const PASSWORD_FIELD = 'password';

// Rules
const DISPLAY_MIN = 8;
const PASSWORD_MIN = 6;
const EMPTY = 0;

// JWT messages
const INVALID_TOKEN = 'invalid token';
const EXPIRED_TOKEN = 'jwt expired';
const INVALID_SIGNATURE = 'invalid signature';

module.exports = {
  EMPTY,
  DISPLAY_MIN,
  EMAIL_FIELD,
  IMAGE_FIELD,
  TOKEN_FIELD,
  PASSWORD_MIN,
  DISPLAY_FIELD,
  EXPIRED_TOKEN,
  INVALID_TOKEN,
  PASSWORD_FIELD,
  INVALID_SIGNATURE,
};