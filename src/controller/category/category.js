// Fonte da verdade
const { http } = require('../../SSOT/exporter');

// Service
const service = require('../../service/exporter');

async function registerCategory(request, response) {
  const newCategory = await service.category.postCategory(request.body.name);
  return response.status(http.CREATED).send(newCategory);
}

async function allCategories(request, response) {
  const all = await service.category.getAll();
  return response.status(http.OK).send(all);
}

module.exports = { registerCategory, allCategories };