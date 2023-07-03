// Fonte da verdade
const { http, errorMessages, fields } = require('../SSOT/exporter');

// Helpers
const { fieldsProvider, checkers } = require('../helpers/exporter');

// JWT manager
const jwtManager = require('./JWT/jwtManager');

function existFields(allFields, type) {
  const allTypes = {
    login: fieldsProvider.loginFields(),
    user: fieldsProvider.userFields(),
    post: fieldsProvider.postFields(),
    postPut: fieldsProvider.postPutFields(),
  };

  allTypes[type].forEach((field) => {
    if (!checkers.keyChecker(allFields, field) || checkers.isEmpty(allFields[field])) {
      throw new Error(errorMessages.MISSING_FIELDS, { cause: http.BAD_REQUEST });
    }
  });
}

function existTokenField(header) {
  if (!checkers.keyChecker(header, fields.TOKEN)
      || checkers.isEmpty(header[fields.TOKEN])) {
    throw new Error(errorMessages.TOKEN_NOT_FOUND, { cause: http.UNAUTHORIZED });
  }
}

function existCategoryFields(field) {
  if (!checkers.keyChecker(field, fields.NAME)
      || checkers.isEmpty(field[fields.NAME])) {
    throw new Error(errorMessages.NAME_NOT_FOUND, { cause: http.BAD_REQUEST });
  }
}

function validateEmail(email) {
  if (!checkers.emailChecker(email)) {
    throw new Error(errorMessages.INVALID_EMAIL, { cause: http.BAD_REQUEST });
  }
}

function validatePassword(password) {
  if (!checkers.passwordChecker(password)) {
    throw new Error(errorMessages.INVALID_PASSWORD, { cause: http.BAD_REQUEST });
  }
}

function validateDisplay(display) {
  if (!checkers.displayChecker(display)) {
    throw new Error(errorMessages.INVALID_DISPLAY, { cause: http.BAD_REQUEST });
  }
}

function validateToken(token) {
  try {
    jwtManager.verifyToken(token);
  } catch (__error) {
    throw new Error(errorMessages.INVALID_TOKEN, { cause: http.UNAUTHORIZED });
  }
}

function validateCategoryIds(allIds, received) {
  received.forEach((each) => {
    if (!allIds.some(({ id }) => (id === each))) {
      throw new Error(errorMessages.CATEGORY_NOT_FOUND, { cause: http.BAD_REQUEST });
    }
  });
}

module.exports = { 
  existFields,
  validateEmail,
  validateToken,
  validateDisplay,
  existTokenField,
  validatePassword,
  existCategoryFields,
  validateCategoryIds,
};
