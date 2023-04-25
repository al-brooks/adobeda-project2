// /c/books
// /

const Community = require("../models/community");

// Get /posts/new
function newPost(req, res) {
  res.render("posts/new", { title: "Create Post", name: req.params.name });
}

// Post /posts
async function createPost(req, res) {
  try {
    const { subject, content } = req.body;
    const community = await Community.findOne({
      community: req.body.community
    });
    community.posts.push({ subject, content, users: req.user });
    await community.save();

    // redirect to community page
    if (req.params.name) {
      res.redirect(`/c/${req.params.name}`);
    } else {
      res.redirect("/");
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  new: newPost,
  create: createPost
};
