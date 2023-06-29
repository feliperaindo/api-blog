const postMid = require('./post/postMid');
const userMid = require('./user/userMid');
const errorMid = require('./global/errorMid');
const tokenMid = require('./global/tokenMid');
const loginMid = require('./login/loginMid');
const categoryMid = require('./category/categoryMid');

module.exports = { errorMid, loginMid, userMid, categoryMid, tokenMid, postMid };