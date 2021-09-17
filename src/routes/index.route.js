const usersRoute = require("./user.route");
const missionsRoute = require("./mission.route");
const plansRoute = require("./plan.route");
const schemeRoute = require("./scheme.route");

function route(app) {
  app.use("/users", usersRoute);
  app.use("/missions", missionsRoute);
  app.use("/plans", plansRoute);
  app.use("/schemes", schemeRoute);
}

module.exports = route;
