require("dotenv").config();
require("./config/database");

const Community = require("./models/community");

// const communities = ["anime", "books", "food"];
// communities.forEach(c => {
//   Community.create({ community: c });
// });

Community.updateMany(
  {}, // update all
  { posts: [], __v: 0 }
).then(console.log);
