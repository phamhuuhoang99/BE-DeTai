const usersRoute = require("./user.route");
// const siteRoute = require("./site");

function route(app) {
  app.use("/users", usersRoute);
  // app.use("/", siteRoute);
}

module.exports = route;
