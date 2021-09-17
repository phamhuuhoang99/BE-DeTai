const express = require("express");
const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST;
var cors = require("cors");
const route = require("./src/routes/index.route");
require("dotenv").config();

//Database connection
const db = require("./src/config/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // f
app.use(cors());

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
