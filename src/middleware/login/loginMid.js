function validateFields(request, response, next) {
  return { request, response, next };
}

module.exports = { validateFields };