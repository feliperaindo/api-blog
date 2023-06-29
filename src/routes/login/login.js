const { Router } = require('express');

const login = Router();

// Fonte da Verdade
const { routes } = require('../../SSOT/exporter');

// Middleware
const middleware = require('../../middleware/exporter');

// Controller
const controller = require('../../controller/exporter');

login.use(middleware.loginMid.validateFields);

login.post(routes.ROOT, controller.login.logIn);

login.use(middleware.errorMid.errorHandler);

module.exports = login;