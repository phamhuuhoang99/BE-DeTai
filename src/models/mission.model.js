module.exports = (sequelize, DataTypes) => {
  const Mission = sequelize.define("mission", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Nhập tên nhiệm vụ",
        },
      },
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Nhập ngày bắt đầu",
        },
      },
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Nhập ngày kết thúc",
        },
      },
    },
    description: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.GEOMETRY,
      allowNull: false,
    },
  });
  return Mission;
};
