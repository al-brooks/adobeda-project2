const Community = require("../models/community");

async function home(req, res) {
  const communities = await Community.find({});
  const posts = [];
  communities.forEach(c => {
    posts.push(...c.posts);
  });
  res.render("index", { title: "Forum Site Homepage", posts });
}

module.exports = {
  home
};
