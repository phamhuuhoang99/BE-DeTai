module.exports = (sequelize, DataTypes) => {
  const Victim = sequelize.define("victim", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, 200],
          msg: "Please provide field within 10 to 200 characters.",
        },
      },
    },
    birthday: {
      type: DataTypes.DATE,
    },
    hometown: {
      type: DataTypes.STRING,
    },
    characteristic: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    // missionId: {
    //   type: DataTypes.INTEGER,
    // },
  });
  return Victim;
};
