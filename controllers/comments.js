const Community = require("../models/community");

async function createComment(req, res) {
  try {
    const community = await Community.findOne({
      community: req.params.name
    });
    const post = community.posts.find(p => (p._id = req.params.id));

    post.comments.push({
      community: req.body.name,
      content: req.body.content,
      users: req.user._id
    });

    await community.save();
    res.redirect(`/c/${req.body.name}/posts/${req.params.id}`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  create: createComment
};
