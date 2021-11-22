require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST;
const cors = require("cors");
const route = require("./src/routes/index.route");
const fileUpload = require("express-fileupload");
const logger = require("morgan");
const passport = require("passport");

//Database connection
const db = require("./src/configs/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // f
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:8080"],
  })
);
app.use("/uploads", express.static("src/uploads"));
app.use(fileUpload());
app.use(passport.initialize());
app.use(logger("dev"));

try {
  db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
route(app);
app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});
