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
    community.posts.push({
      community: req.body.community,
      subject,
      content,
      users: req.user._id
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
      populate: [
        {
          path: "users"
        },
        {
          path: "comments",
          populate: {
            path: "users"
          }
        }
      ]
    });
    const post = community.posts.find(function (post) {
      return post._id.toString() === req.params.id;
    });

    res.render("posts/show", {
      title: "Post Details",
      post,
      comments: [...post.comments]
    });
  } catch (err) {
    console.log(err);
  }
}

async function deletePost(req, res) {
  try {
    const community = await Community.findOne({
      community: req.params.name
    });
    const postIdx = community.posts.findIndex(function (post) {
      return post._id.toString() === req.params.id;
    });

    community.posts.splice(postIdx, 1);
    await community.save();
    res.redirect(`/c/${req.params.name}`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  new: newPost,
  create: createPost,
  show,
  delete: deletePost
};
