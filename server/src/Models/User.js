const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      emailAdress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      avatar: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      courses: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        // allowNull: false,
      },
    },
    { timestamps: false }
  );
};
