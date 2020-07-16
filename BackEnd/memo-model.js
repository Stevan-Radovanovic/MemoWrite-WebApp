const mongoose = require("mongoose");

const memoSchema = mongoose.Schema({
  text: { type: String, required: true },
});

module.exports = mongoose.model("Memo", memoSchema);
