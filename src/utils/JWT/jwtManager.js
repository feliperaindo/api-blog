const SECRET = process.env.JWT_SECRET;

const jwt = require('jsonwebtoken');

// Fonte da verdade
const { jwtData } = require('../../SSOT/exporter');

function createToken(email, password) {
  return jwt.sign({ email, password }, SECRET, jwtData.CONFIG);
}

function verifyToken(token) {
  return jwt.verify(token, SECRET);
}

function decodeToken(token) {
  const { email, password } = verifyToken(token);
  return { email, password };
}

module.exports = { createToken, verifyToken, decodeToken };
