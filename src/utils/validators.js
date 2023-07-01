// Fonte da verdade
const { http, errorMessages, constants } = require('../SSOT/exporter');

// Helpers
const { fieldsProvider, checkers } = require('../helpers/exporter');

// JWT manager
const jwtManager = require('./JWT/jwtManager');

function existTokenField(header) {
  if (!checkers.keyChecker(header, constants.TOKEN_FIELD)
      || checkers.isEmpty(header[constants.TOKEN_FIELD])) {
    throw new Error(errorMessages.TOKEN_NOT_FOUND, { cause: http.UNAUTHORIZED });
  }
}

function existLoginFields(fields) {
  fieldsProvider.loginFields().forEach((field) => {
    if (!checkers.keyChecker(fields, field) || checkers.isEmpty(fields[field])) {
      throw new Error(errorMessages.MISSING_FIELDS, { cause: http.BAD_REQUEST });
    }
  });
}

function existsUserFields(fields) {
  fieldsProvider.userFields().forEach((field) => {
    if (!checkers.keyChecker(fields, field || checkers.isEmpty(fields[field]))) {
      throw new Error(errorMessages.MISSING_FIELDS, { cause: http.BAD_REQUEST });
    }
  });
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

module.exports = { 
  validateEmail,
  validateToken,
  validateDisplay,
  existTokenField,
  validatePassword,
  existLoginFields,
  existsUserFields,
  existCategoryFields,
};
