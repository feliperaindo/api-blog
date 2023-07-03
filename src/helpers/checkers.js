// Fonte da verdade
const { rules } = require('../SSOT/exporter');

function keyChecker(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

function emailChecker(email) {
  const regex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/i;
  return regex.test(email);
}

function passwordChecker(password) {
  return password.length >= rules.PASSWORD_MIN;
}

function displayChecker(display) {
  return display.length >= rules.DISPLAY_MIN;
}

function isEmpty(value) {
  return value.length === rules.EMPTY;
}

module.exports = {
  isEmpty,
  keyChecker,
  emailChecker,
  displayChecker,
  passwordChecker,
};