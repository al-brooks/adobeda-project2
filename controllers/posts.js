// /c/books
// /

const Community = require("../models/community");

// Get /posts/new
function newPost(req, res) {
  res.render("posts/new", { title: "Create Post" });
}

module.exports = {
  new: newPost
};
