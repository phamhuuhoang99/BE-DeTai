const db = require("../config/database");
const Sequelize = require("sequelize");
const UserModel = require("../models/user.model");
const MissModel = require("../models/mission.model");
const PlanModel = require("../models/plan.model");
const SchemeModel = require("../models/scheme.model");

const User = UserModel(db, Sequelize);
const Mission = MissModel(db, Sequelize);
const Plan = PlanModel(db, Sequelize);
const Scheme = SchemeModel(db, Sequelize);

Mission.hasMany(Plan, {
  onDelete: "CASCADE",
});
Plan.belongsTo(Mission);

/* -----------------------------------*/

Plan.hasMany(Scheme, {
  onDelete: "CASCADE",
});
Scheme.belongsTo(Plan);

db.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);
});

module.exports = {
  User,
  Mission,
  Plan,
  Scheme,
};
