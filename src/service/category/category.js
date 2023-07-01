const { Category } = require('../../models');

async function postCategory(name) {
  const newCategory = await Category.create({ name });
  return { id: newCategory.null, name };
}

async function getAll() {
  return Category.findAll({ raw: true });
}

module.exports = { getAll, postCategory };