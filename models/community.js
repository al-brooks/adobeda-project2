//require mongoose
const mongoose = require("mongoose");
//set up the schema for the community model
const Schema = mongoose.Schema;

const communitySchema = new Schema({
  name: { type: String }
});

module.exports = mongoose.model("Community", communitySchema);
