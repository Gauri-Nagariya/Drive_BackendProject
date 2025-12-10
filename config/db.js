const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const MONGODB = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB);
    console.log("DB connected");
  } catch (error) {
    console.log("DB disconnected");
  }
};

module.exports = connectDB;
