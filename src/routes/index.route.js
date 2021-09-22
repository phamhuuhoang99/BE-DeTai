const usersRoute = require("./user.route");
const missionsRoute = require("./mission.route");
const plansRoute = require("./plan.route");
const schemeRoute = require("./scheme.route");
const victimRoute = require("./victim.route.js");

function route(app) {
  app.use("/users", usersRoute);
  app.use("/missions", missionsRoute);
  app.use("/plans", plansRoute);
  app.use("/schemes", schemeRoute);
  app.use("/victims", victimRoute);
}

module.exports = route;
