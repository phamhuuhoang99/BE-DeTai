const usersRoute = require("./user.route");
const missionsRoute = require("./mission.route");

function route(app) {
  app.use("/users", usersRoute);
  app.use("/missions", missionsRoute);
}

module.exports = route;
