const { Router } = require('express');

const user = Router();

// Fonte da verdade
const { routes } = require('../../SSOT/exporter');

// Middleware
const middleware = require('../../middleware/exporter');

// Controller
const controller = require('../../controller/exporter');

user.use(middleware.tokenMid.tokenValidator);

user.get(routes.ROOT, controller.user.allUsers);

user.use(middleware.userMid.validadeFields);

user.get(routes.ID, controller.user.userById);

user.post(routes.ROOT, controller.user.registerUser);

user.delete(routes.ME, controller.user.deleteMe);

user.use(middleware.errorMid.errorHandler);

module.exports = user;