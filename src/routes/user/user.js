const { Router } = require('express');

const user = Router();

// Fonte da verdade
const { routes } = require('../../SSOT/exporter');

// Middleware
const middleware = require('../../middleware/exporter');

// Controller
const controller = require('../../controller/exporter');

user.post(
  routes.ROOT,
  middleware.userMid.validadeFields,
  controller.user.registerUser,
);

user.use(middleware.tokenMid.tokenValidator);

user.get(routes.ROOT, controller.user.allUsers);

user.get(routes.ID, controller.user.userById);

user.delete(routes.ME, controller.user.deleteMe);

user.use(middleware.errorMid.errorHandler);

module.exports = user;