const mongoose = require("mongoose");

const memoSchema = mongoose.Schema({
  memo: { type: String, required: true },
});

module.exports = mongoose.model("Memo", memoSchema);
