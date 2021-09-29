const usersRoute = require("./user.route");
const missionsRoute = require("./mission.route");
const plansRoute = require("./plan.route");
const schemesRoute = require("./scheme.route");
const victimsRoute = require("./victim.route.js");
const materialsRoute = require("./material.route.js");
const symbolRoute = require("./symbol.route.js");

function route(app) {
  app.use("/users", usersRoute);
  app.use("/missions", missionsRoute);
  app.use("/plans", plansRoute);
  app.use("/schemes", schemesRoute);
  app.use("/victims", victimsRoute);
  app.use("/materials", materialsRoute);
  app.use("/symbols", symbolRoute);
}

module.exports = route;
