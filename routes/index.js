const express = require("express");
const router = express.Router();
const passport = require("passport");
const indexCtrl = require("../controllers/index");

// Get /
router.get("/", indexCtrl.home);

// Get /create - Create Post Form (select your community from drop down)

// Get /community/create - Create Post Form (Drop Down is pre selected with Community)

// Google OAuth Login Route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth Callback Route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/"
  })
);

// Google OAuth Logout Route
router.get("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/");
  });
});

module.exports = router;
