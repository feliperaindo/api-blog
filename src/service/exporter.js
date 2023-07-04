const user = require('./user/user');
const post = require('./post/exporter');
const login = require('./login/login');
const category = require('./category/category');

module.exports = { login, user, category, post };