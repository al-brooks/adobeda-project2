const Community = require("../models/community");
const User = require("../models/user");

async function show(req, res) {
  // req.params.name (split and join with '-' and remove special )
  const communities = await Community.find({});
  const posts = [];
  const comments = [];

  for (const c of communities) {
    if (c.posts.length) {
      let filteredArr = [...c.posts].filter(function (p) {
        return p.users[0].toString() === req.user.id;
      });
      posts.push(...filteredArr);
    } else {
      continue;
    }
  }

  for (const p of posts) {
    if (p.comments.length) {
      let filteredArr = [...p.comments].filter(function (c) {
        return c.users[0].toString() === req.user.id;
      });
      comments.push(...filteredArr);
    } else {
      continue;
    }
  }

  res.render("users/index", {
    title: "Profile Page",
    user: req.user,
    posts,
    comments
  });
}

module.exports = {
  show
};
