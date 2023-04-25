const Community = require("../models/community");

async function index(req, res) {
  try {
    const community = await Community.findOne({ community: req.params.name });
    //todo: create view template
    res.render("communities/index", {
      title: `${req.params.name} community`,
      posts: community.posts,
      name: req.params.name
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  index
};
