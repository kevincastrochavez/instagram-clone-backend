const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  caption: String,
  user: String,
  image: String,
  comments: [],
});

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
