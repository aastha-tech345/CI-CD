// models/emailModel.js
const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Email", emailSchema);
