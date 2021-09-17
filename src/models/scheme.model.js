module.exports = (sequelize, DataTypes) => {
  const Scheme = sequelize.define("scheme", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Nhập tên phương án",
        },
      },
    },
    unitId: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      // validate: {
      //   notNull: {
      //     msg: "Nhập ngày bắt đầu",
      //   },
      // },
    },
    time_start: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Nhập thời gian xuất phát",
        },
      },
    },
    note: {
      type: DataTypes.STRING,
    },
    geom: {
      type: DataTypes.GEOMETRY,
      allowNull: false,
    },
    color_scheme: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Scheme;
};
