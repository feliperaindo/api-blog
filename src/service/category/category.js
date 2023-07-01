const { Category } = require('../../models');

async function postCategory(name) {
  const newCategory = await Category.create({ name });
  return { id: newCategory.null, name };
}

module.exports = { postCategory };