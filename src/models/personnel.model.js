module.exports = (sequelize, DataTypes) => {
  const Personnel = sequelize.define("personnel", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Nhập tên Nhân sự",
        },
      },
    },
    unitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
    },
    rank: {
      type: DataTypes.STRING,
    },
    specialize: {
      type: DataTypes.STRING,
    },
  });
  return Personnel;
};
