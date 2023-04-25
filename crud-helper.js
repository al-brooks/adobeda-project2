require("dotenv").config();
require("./config/database");

const Community = require("./models/community");

// const communities = ["Anime", "Books", "Food"];
// communities.forEach(c => {
//   Community.create({ community: c });
// });

Community.updateMany(
  {}, // update all
  { posts: [] }
).then(console.log);
