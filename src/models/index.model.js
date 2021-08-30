const db = require("../config/database");
const Sequelize = require("sequelize");
const UserModel = require("../models/user.model");
const MissModel = require("../models/mission.model");
const PlanModel = require("../models/plan.model");

const User = UserModel(db, Sequelize);
const Mission = MissModel(db, Sequelize);
const Plan = PlanModel(db, Sequelize);

Mission.hasMany(Plan);
Plan.belongsTo(Mission);

// db.sync({ force: true }).then(() => {
//   console.log(`Database & tables created!`);
// });

module.exports = {
  User,
  Mission,
  Plan,
};
