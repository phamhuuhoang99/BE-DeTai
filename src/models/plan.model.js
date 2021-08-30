module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define("plan", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Nhập tên Kế hoạch",
        },
      },
    },
    description: {
      type: DataTypes.STRING,
    },
  });
  return Plan;
};
