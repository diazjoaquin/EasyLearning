const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "comments",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    { timestamps: false }
  );
};
