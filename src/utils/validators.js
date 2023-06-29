// Fonte da verdade
const { http, errorMessages } = require('../SSOT/exporter');

// Helpers
const { fieldsProvider, checkers } = require('../helpers/exporter');

function existLoginFields(fields) {
  fieldsProvider.loginFields().forEach((field) => {
    if (!checkers.keyChecker(fields, field)) {
      throw new Error(errorMessages.MISSING_FIELDS, { cause: http.BAD_REQUEST });
    }
  });
}

function existsUserFields(fields) {
  fieldsProvider.userFields().forEach((field) => {
    if (!checkers.keyChecker(fields, field)) {
      throw new Error(errorMessages.MISSING_FIELDS, { cause: http.BAD_REQUEST });
    }
  });
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

module.exports = { 
  validateEmail,
  validateDisplay,
  validatePassword,
  existLoginFields,
  existsUserFields,
};