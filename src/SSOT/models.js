// Models names
const USER_MODEL = 'User';
const CATEGORY_MODEL = 'Category';
const BLOG_POST_MODEL = 'BlogPost';
const POST_CATEGORY_MODEL = 'PostCategory';

// Table name
const POST_CATEGORY_TABLE = 'posts_categories';

// Foreign Keys
const DEFAULT = 'id';
const POST_ID = 'postId';
const USER_ID = 'userId';
const CATEGORY_ID = 'categoryId';

// Apelidos
const USER_ALIAS = 'user';
const CATEGORY_ALIAS = 'categories';
const BLOG_POST_ALIAS = 'posts';

// Index
const DOT = '.';
const NODE_ENV = 'development';
const CONFIG_PATH = '/../config/config.js';
const EXTENSION_JS = '.js';
const NEGATIVE_THREE = -3;

module.exports = {
  DOT,
  DEFAULT,
  POST_ID,
  USER_ID,
  NODE_ENV,
  USER_ALIAS,
  USER_MODEL,
  CONFIG_PATH,
  CATEGORY_ID,
  EXTENSION_JS,
  CATEGORY_ALIAS,
  CATEGORY_MODEL,
  NEGATIVE_THREE,
  BLOG_POST_MODEL,
  BLOG_POST_ALIAS,
  POST_CATEGORY_MODEL,
  POST_CATEGORY_TABLE,
};