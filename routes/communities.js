const express = require("express");
const router = express.Router();

const communityCtrl = require("../controllers/communities");

// GET /c/name - Index Route
router.get("/:name", communityCtrl.index);

module.exports = router;
