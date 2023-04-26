// /c/books
// /

const Community = require("../models/community");
const User = require("../models/user");

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
    community.posts.push({
      community: req.body.community,
      subject,
      content,
      users: req.user
    });
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

async function show(req, res) {
  try {
    const community = await Community.findOne({
      community: req.params.name
    }).populate({
      path: "posts",
      populate: {
        path: "users",
        model: "User"
      }
    });

    const post = community.posts.find(post => (post._id = req.params.id));
    console.log(post);
    console.log(post.comments);
    console.log(post.comments.users);
    // const postUser = users.find(u => (u._id = post.users));

    res.render("posts/show", {
      title: "Post Details",
      post,
      user: post.users[0]
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  new: newPost,
  create: createPost,
  show
};
