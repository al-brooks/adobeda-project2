const express = require("express");
const router = express.Router();
const postsCtrl = require("../controllers/posts");

router.get("/posts/new", postsCtrl.new);

router.post("/posts", postsCtrl.create);

module.exports = router;
