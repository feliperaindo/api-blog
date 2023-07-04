const { Op } = require('sequelize');

// Fonte da verdade
const { model, fields, errorMessages, http } = require('../../SSOT/exporter');

// Models
const models = require('../../models');

// Gets
async function getAll() {
  return models.BlogPost.findAll(
    {
      include: [
        {
          model: models.User,
          as: model.USER_ALIAS,
          attributes: { exclude: [fields.PASSWORD] },
        },
        {
          model: models.Category,
          as: model.CATEGORY_ALIAS,
          through: { attributes: [] },
        },
      ],
    },
  );
}

async function getById({ email }, id, transaction = null) {
  const post = await models.BlogPost.findByPk(id, { transaction,
    where: { email },
    include: 
    [{
        model: models.User,
        as: model.USER_ALIAS,
        attributes: { exclude: [fields.PASSWORD] },
      },
      { 
        model: models.Category,
        as: model.CATEGORY_ALIAS,
        through: { attributes: [] }, 
    }],
  });

  if (post === null) {
    throw new Error(errorMessages.POST_NOT_FOUND, { cause: http.NOT_FOUND });
  }
  return post;
}

async function getBlogPost(id, transaction = null) {
  return models.BlogPost.findByPk(id, { transaction, raw: true });
}

async function getUserId(email, password, transaction = null) {
  return models.User.findOne({
    where: { email, password },
    attributes: [model.DEFAULT],
    transaction,
  });
}

async function getBySearch(search) {
  if (!search.length) { return getAll(); }

  return models.BlogPost.findAll(
    { 
      where: {
        [Op.or]: [{ title: { [Op.substring]: search } }, { content: { [Op.substring]: search } }],
      },
      include: [{
        model: models.User,
        as: model.USER_ALIAS,
        attributes: { exclude: [fields.PASSWORD] },
      },
      { model: models.Category,
        as: model.CATEGORY_ALIAS,
        through: { attributes: [] },
      }],
    },
  );
}

module.exports = { getAll, getBlogPost, getUserId, getById, getBySearch };