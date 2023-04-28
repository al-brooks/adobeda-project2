//require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    community: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Community"
      }
    ],
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  {
    timestamps: true
  }
);

const postSchema = new Schema(
  {
    community: {
      type: String,
      required: true
    },
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
  },
  {
    timestamps: true
  }
);

const communitySchema = new Schema(
  {
    community: {
      type: String,
      enum: ["anime", "books", "food"],
      required: true
    },
    posts: [postSchema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Community", communitySchema);
