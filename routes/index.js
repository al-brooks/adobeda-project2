const express = require("express");
const router = express.Router();
const passport = require("passport");
const indexCtrl = require("../controllers/index");

router.get("/", indexCtrl.home);

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
