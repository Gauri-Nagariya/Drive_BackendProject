const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: [true, "user is required"],
  },
  filename: String,
  fileType: String,
  fileData: Buffer,
});

const document = mongoose.model("Document", documentSchema);
module.exports = document;
