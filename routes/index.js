const express = require("express");
const router = express.Router();
const indexCtrl = require("../controllers/index");

// Get /
router.get("/", indexCtrl.home);

module.exports = router;
