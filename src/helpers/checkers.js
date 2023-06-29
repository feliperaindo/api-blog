// Fonte da verdade
const { constants } = require('../SSOT/exporter');

function keyChecker(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

function emailChecker(email) {
  const regex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/i;
  return regex.test(email);
}

function passwordChecker(password) {
  return password.length >= constants.PASSWORD_MIN;
}

module.exports = { keyChecker, emailChecker, passwordChecker };