const express = require("express");
const router = express.Router();
const commentsCtrl = require("../controllers/comments");

router.post("/c/:name/posts/:id/comments", commentsCtrl.create);

router.delete("/c/:name/posts/:pid/comments/:cid", commentsCtrl.delete);

module.exports = router;
