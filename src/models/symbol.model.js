module.exports = (sequelize, DataTypes) => {
  const Symbol = sequelize.define("symbol", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Nhập tên kiểu thảm họa",
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Upload file symbol",
        },
      },
    },
    type: {
      type: DataTypes.STRING,
    },
    note: {
      type: DataTypes.STRING,
    },
  });
  return Symbol;
};
