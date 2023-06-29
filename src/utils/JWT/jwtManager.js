const SECRET = process.env.JWT_SECRET;

const jwt = require('jsonwebtoken');

// Fonte da verdade
const { jwtConfig } = require('../../SSOT/exporter');

function createToken(email, password) {
  return jwt.sign({ email, password }, SECRET, jwtConfig);
}

function verifyToken(token) {
  return jwt.verify(token, SECRET);
}

module.exports = { createToken, verifyToken };
