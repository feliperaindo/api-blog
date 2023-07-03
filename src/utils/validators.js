// Fonte da verdade
const { http, errorMessages, constants } = require('../SSOT/exporter');

// Helpers
const { fieldsProvider, checkers } = require('../helpers/exporter');

// JWT manager
const jwtManager = require('./JWT/jwtManager');

function existFields(fields, type) {
  const allTypes = {
    login: fieldsProvider.loginFields(),
    user: fieldsProvider.userFields(),
    post: fieldsProvider.postFields(),
  };

  allTypes[type].forEach((field) => {
    if (!checkers.keyChecker(fields, field) || checkers.isEmpty(fields[field])) {
      throw new Error(errorMessages.MISSING_FIELDS, { cause: http.BAD_REQUEST });
    }
  });
}

function existTokenField(header) {
  if (!checkers.keyChecker(header, constants.TOKEN_FIELD)
      || checkers.isEmpty(header[constants.TOKEN_FIELD])) {
    throw new Error(errorMessages.TOKEN_NOT_FOUND, { cause: http.UNAUTHORIZED });
  }
}

function existCategoryFields(field) {
  if (!checkers.keyChecker(field, constants.NAME_FIELD)
      || checkers.isEmpty(field[constants.NAME_FIELD])) {
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
