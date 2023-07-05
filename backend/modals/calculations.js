const mongoose = require("mongoose");

const History = new mongoose.Schema({
  value_one: { type: String },
  value_two: { type: String },
  operand: { type: String },
  result: { type: String },
});

module.exports = mongoose.model("history", History);

// docker run --network host curlimages/curl `
// >>   --request POST `
// >>   --url http://localhost:3000/api/calculations `
// >>   --header 'content-type: application/json' `
// >>   --data '{"value_one": "string", "value_two": "string", "operand": "string"}'
// >>
