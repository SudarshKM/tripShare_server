const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  startingpoint: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  startdate: {
    type: String,
    required: true,
  },
  enddate: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  people: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const trips = mongoose.model("trips", tripSchema);
module.exports = trips;
