const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const registerRoute = require("./routes/registerRoute");
const uploadRoute = require("./routes/uploadRoute.js");
const updateRoute = require("./routes/updateRoute.js");
const path = require("path");
const cookie = require("cookie-parser");
const auth = require("./middlewares/auth");

const app = express();
dotenv.config();

connectDB();

const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());

app.use("/", registerRoute);
app.use("/", auth, uploadRoute);
app.use("/", auth, updateRoute);

//global level error handling - request will go to server and response won't reach to the user and error caught on global level so user will keep waiting for response and error is not display on the user screen.
process.on("uncaughtException", () => {
  console.log("uncaught Exception");
  console.log(err);
});

app.listen(PORT, () => {
  console.log(`port running at http://localhost:${PORT}/`);
});
