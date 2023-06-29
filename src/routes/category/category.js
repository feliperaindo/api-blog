const { Router } = require('express');

const category = Router();

// Fonte da verdade
const { routes } = require('../../SSOT/exporter');

// Middleware
const middleware = require('../../middleware/exporter');

// Controller
const controller = require('../../controller/exporter');

category.use(middleware.tokenMid.tokenValidator);

category.get(routes.ROOT, controller.category.allCategories);

category.use(middleware.categoryMid.validadeFields);

category.post(routes.ROOT, controller.category.registerCategory);

category.use(middleware.errorMid.errorHandler);

module.exports = category;