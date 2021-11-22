const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 200],
          msg: "Password có 6 to 200 ký tự.",
        },
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Số điện thoại đã tồn tại!",
      },
    },
    email: {
      type: DataTypes.STRING,
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

  User.prototype.isValidPassword = async function (newPassword) {
    try {
      return await bcrypt.compare(newPassword, this.password);
    } catch (error) {
      throw new Error(error);
    }
  };

  User.beforeCreate(async (user, options) => {
    try {
      //Generate salt
      const salt = await bcrypt.genSalt(10);
      //Generate a password hash (salt +  hash password)
      const passwordHash = await bcrypt.hash(user.password, salt);
      console.log(passwordHash);
      //re-assign Password hashed
      user.password = passwordHash;
    } catch (error) {
      throw new Error(error);
    }
  });

  return User;
};
