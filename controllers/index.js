const Community = require("../models/community");

async function home(req, res) {
  try {
    const communities = await Community.find({}).populate({
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
    const posts = [];
    communities.forEach(c => {
      posts.push(...c.posts);
    });
    res.render("index", {
      title: "YOUnity",
      posts,
      user: req.user
    });
  } catch (err) {
    console.error(err);
    res.render("error", { title: "Something Went Wrong!" });
  }
}

module.exports = {
  home
};
