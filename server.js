// require dependencies
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");
const indexRoutes = require("./routes/index");
const postRoutes = require("./routes/posts");
const communityRoutes = require("./routes/communities");
const commentRoutes = require("./routes/comments");
const userRoutes = require("./routes/users");

// init express
const app = express();

// configure app settings
app.set("view engine", "ejs");
require("dotenv").config();
require("./config/database");
require("./config/passport");

// mount middleware
app.use(cors());
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

// mount routes
// add authentication middleware
app.use("/", indexRoutes);
app.use("/", postRoutes);
app.use("/", commentRoutes);
app.use("/c", communityRoutes);
app.use("/user", userRoutes);

// catch all route - 404
app.use("*", (req, res) => {
  res.render("404", { title: "404 - Page Not Found" });
});

// listen for requests
app.listen(3000, () => {
  console.log("Express is listening on port:3000");
});
