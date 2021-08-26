const Sequelize = require("sequelize");

const db = require("../config/database");

const Mission = db.define("mission", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Nhập tên nhiệm vụ",
      },
    },
  },
  start_date: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Nhập ngày bắt đầu",
      },
    },
  },
  end_date: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Nhập ngày kết thúc",
      },
    },
  },
  description: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.GEOMETRY,
    allowNull: false,
  },
});

module.exports = Mission;
