// Table names
const USERS = 'users';
const CATEGORIES = 'categories';
const BLOG_POSTS = 'blog_posts';
const POSTS_CATEGORIES = 'posts_categories';

// Nome das colunas
const POST_ID = 'post_id';
const USER_ID = 'user_id';
const CREATED_AT = 'created_at';
const UPDATED_AT = 'updated_at';
const CATEGORY_ID = 'category_id';
const DISPLAY_NAME = 'display_name';

// Rules
const CASCADE = 'CASCADE';
const TIMESTAMP = 'CURRENT_TIMESTAMP';
const TIMESTAMP_UPDATE = 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP';

// Foreign Key
const DEFAULT = 'id';

module.exports = {
  USERS,
  CASCADE,
  DEFAULT,
  POST_ID,
  USER_ID,
  TIMESTAMP,
  CREATED_AT,
  CATEGORIES,
  UPDATED_AT,
  BLOG_POSTS,
  CATEGORY_ID,
  DISPLAY_NAME,
  POSTS_CATEGORIES,
  TIMESTAMP_UPDATE,
};