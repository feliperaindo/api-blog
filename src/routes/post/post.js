const { Router } = require('express');

const post = Router();

// Fonte da verdade
const { routes } = require('../../SSOT/exporter');

// Middleware
const middleware = require('../../middleware/exporter');

// Controller
const controller = require('../../controller/exporter');

post.use(middleware.tokenMid.tokenValidator);

post.get(routes.ROOT, controller.post.allPosts);

post.get(routes.SEARCH_TERM, controller.post.searchPostByTerm);

post.get(routes.ID, controller.post.postById);

post.put(
  routes.ID,
  middleware.postMid.validadePutFields,
  controller.post.updatePost,
);

post.post(
  routes.ROOT,
  middleware.postMid.validadeFields,
  controller.post.registerPost,
);

post.delete(routes.ID, controller.post.deletePost);

post.use(middleware.errorMid.errorHandler);

module.exports = post;