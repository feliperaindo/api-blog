function errorHandler(error, __request, response, __next) {
  response.status(error.cause).send(error.message);
}

module.exports = { errorHandler };