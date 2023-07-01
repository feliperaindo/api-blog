// Fonte da verdade
const { http } = require('../../SSOT/exporter');

const service = require('../../service/exporter');

async function registerCategory(request, response) {
  const newCategory = await service.category.postCategory(request.body.name);
  return response.status(http.CREATED).send(newCategory);
}

async function allCategories(request, response) {
  return { request, response };
}

module.exports = { registerCategory, allCategories };