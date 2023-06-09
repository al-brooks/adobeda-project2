const Community = require("../models/community");

async function index(req, res) {
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
    res.render("communities/index", {
      title: `${req.params.name} community`,
      posts: community.posts,
      name: req.params.name
    });
  } catch (err) {
    console.error(err);
    res.render("error", { title: "Something Went Wrong!" });
  }
}

module.exports = {
  index
};
