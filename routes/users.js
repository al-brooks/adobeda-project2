const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/users");

// view user profile page
router.get("/profile", userCtrl.show);

module.exports = router;
