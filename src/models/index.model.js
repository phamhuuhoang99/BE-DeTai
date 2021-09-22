const db = require("../config/database");
const Sequelize = require("sequelize");
const UserModel = require("../models/user.model");
const MissModel = require("../models/mission.model");
const PlanModel = require("../models/plan.model");
const SchemeModel = require("../models/scheme.model");
const VictimModel = require("../models/victim.model");

const User = UserModel(db, Sequelize);
const Mission = MissModel(db, Sequelize);
const Plan = PlanModel(db, Sequelize);
const Scheme = SchemeModel(db, Sequelize);
const Victim = VictimModel(db, Sequelize);

/* ---------------- Relationship 1-n --------------------*/
Mission.hasMany(Plan, {
  onDelete: "CASCADE",
});
Plan.belongsTo(Mission);
/* ---------------- Relationship 1-n --------------------*/
Plan.hasMany(Scheme, {
  onDelete: "CASCADE",
});
Scheme.belongsTo(Plan);
/*-----------------------Relationship 1-n----------------*/
Mission.hasMany(Victim, {
  onDelete: "CASCADE",
});
Victim.belongsTo(Mission);
/* ------------------------------------------------------*/

db.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);
});

module.exports = {
  User,
  Mission,
  Plan,
  Scheme,
  Victim,
};
