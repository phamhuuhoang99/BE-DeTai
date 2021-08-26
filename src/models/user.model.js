const Sequelize = require("sequelize");

const db = require("../config/database");

const User = db.define("user", {
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "Tên đăng nhập đã tồn tại",
    },
    validate: {
      len: {
        args: [10, 200],
        msg: "Please provide field within 10 to 200 characters.",
      },
    },
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      len: {
        args: [6, 200],
        msg: "Password có 6 to 200 ký tự.",
      },
    },
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "Email đã tồn tại!",
    },
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: {
        args: true,
        msg: "Sai định dạng Email",
      },
    },

    allowNull: false,
    unique: {
      args: true,
      msg: "Email đã tồn tại!",
    },
  },
});

module.exports = User;
