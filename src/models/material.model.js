module.exports = (sequelize, DataTypes) => {
  const Material = sequelize.define("material", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Nhập tên CSVC",
        },
      },
    },
    description: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
  });
  return Material;
};
