const express = require("express");
const router = express.Router();
const postsCtrl = require("../controllers/posts");

router.get("/posts/new", postsCtrl.new);

router.post("/posts", postsCtrl.create);

router.get("/c/:name/posts/new", postsCtrl.new);

router.post("/c/:name/posts", postsCtrl.create);

router.get("/c/:name/posts/:id", postsCtrl.show);

router.delete("/c/:name/posts/:id", postsCtrl.delete);

module.exports = router;
