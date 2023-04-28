const express = require("express");
const router = express.Router();
const postsCtrl = require("../controllers/posts");

router.get("/posts/new", postsCtrl.new);

router.post("/posts", postsCtrl.create);

router.get("/c/:name/posts/new", postsCtrl.new);

router.post("/c/:name/posts", postsCtrl.create);

router.get("/c/:name/posts/:id", postsCtrl.show);

router.put("/c/:name/posts/:id", postsCtrl.update);

router.delete("/c/:name/posts/:id", postsCtrl.delete);

router.get("/c/:name/posts/:id/edit", postsCtrl.edit);

module.exports = router;
