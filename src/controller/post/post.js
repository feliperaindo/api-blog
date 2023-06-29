async function registerPost(request, response) {
  return { request, response };
}

async function allPosts(request, response) {
  return { response, request };
}

async function postById(request, response) {
  return { request, response };
}

async function updatePost(request, response) {
  return { request, response };
}

async function deletePost(request, response) {
  return { response, request };
}

async function searchPostByTerm(request, response) {
  return { request, response };
}

module.exports = {
  allPosts,
  postById,
  updatePost,
  deletePost,
  registerPost,
  searchPostByTerm,
};