module.exports = (sequelize, DataTypes) => {
  const Unit = sequelize.define("unit", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Nhập tên Đơn vị",
        },
      },
    },
    number: {
      type: DataTypes.INTEGER,
    },
    vehicleNumber: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
    typeUnit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Unit;
};
