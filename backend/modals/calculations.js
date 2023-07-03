const mongoose = require("mongoose");

const History = new mongoose.Schema({
  value_one: { type: String },
  value_two: { type: String },
  operand: { type: String },
});

module.exports = mongoose.model("history", History);
