// /c/books
// /

const Community = require("../models/community");

// Get /posts/new
function newPost(req, res) {
  res.render("posts/new", { title: "Create Post" });
}

// Post /posts
async function createPost(req, res) {
  // First we want to pull Community
  console.log(req.body);
  console.log(req.user);
}

module.exports = {
  new: newPost,
  create: createPost
};
