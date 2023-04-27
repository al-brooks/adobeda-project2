const Community = require("../models/community");
const User = require("../models/user");

async function show(req, res) {
  // req.params.name (split and join with '-' and remove special )
  const communities = await Community.find({});
  const posts = [];
  const comments = [];
  for (const c of communities) {
    if (c.posts.length) {
      let filteredArr = [...c.posts].filter(
        p => p.users[0].toString() === req.user.id
      );
      posts.push(...filteredArr);
    } else {
      break;
    }
  }

  for (const p of posts) {
    if (p.comments.length) {
      let filteredArr = [...p.comments].filter(
        c => c.users[0].toString() === req.user.id
      );
      comments.push(...filteredArr);
    } else {
      break;
    }
  }
  res.render("users/index", { title: "Profile Page", posts, comments });
}

module.exports = {
  show
};
