function home(req, res) {
  res.render("index", { title: "Forum Site Homepage" });
}

module.exports = {
  home
};
