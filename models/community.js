//require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// likes = array of Users
const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

// likes = array of Users
const postSchema = new Schema({
  subject: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  comments: [commentSchema],
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const communitySchema = new Schema({
  name: {
    type: String,
    enum: ["Anime", "Books", "Food"],
    required: true
  },
  posts: [postSchema]
});

module.exports = mongoose.model("Community", communitySchema);
