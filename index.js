const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");
const route = require("./src/routes/index.route");

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

// app.use("/users", require("./src/routes/index"));
route(app);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
