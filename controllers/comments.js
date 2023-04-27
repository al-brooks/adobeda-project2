const Community = require("../models/community");

async function createComment(req, res) {
  try {
    const community = await Community.findOne({
      community: req.params.name
    });

    const post = community.posts.find(function (post) {
      return post._id.toString() === req.params.id;
    });

    post.comments.push({
      community: req.body.name,
      content: req.body.content,
      posts: req.params.id,
      users: req.user._id
    });

    await community.save();
    res.redirect(`/c/${req.body.name}/posts/${req.params.id}`);
  } catch (err) {
    console.log(err);
  }
}

async function deleteComment(req, res) {
  try {
    const community = await Community.findOne({
      community: req.params.name
    });
    const post = community.posts.find(function (post) {
      return post._id.toString() === req.params.pid;
    });

    const commentIdx = post.comments.findIndex(function (c) {
      return c._id.toString() === req.params.cid;
    });

    post.comments.splice(commentIdx, 1);
    await community.save();
    res.redirect(`/c/${req.params.name}/posts/${req.params.pid}`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  create: createComment,
  delete: deleteComment
};
