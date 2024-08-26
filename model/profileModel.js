const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  phonenum: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  drinking: {
    type: String,
    required: true,
  },
  smoking: {
    type: String,
    required: true,
  },
  relationship: {
    type: String,
    required: true,
  },

});

const profiles = mongoose.model("profiles", profileSchema);

module.exports = profiles;
