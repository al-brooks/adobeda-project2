const Community = require("../models/community");

async function home(req, res) {
  try {
    const communities = await Community.find({});
    const posts = [];
    communities.forEach(c => {
      posts.push(...c.posts);
    });
    res.render("index", {
      title: "Forum Site Homepage",
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
