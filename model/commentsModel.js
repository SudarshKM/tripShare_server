const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const comments = mongoose.model("comments", commentSchema);
module.exports = comments;
