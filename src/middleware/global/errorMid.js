function errorHandler(error, __request, response, __next) {
  response.status(error.cause).send({ message: error.message });
}

module.exports = { errorHandler };