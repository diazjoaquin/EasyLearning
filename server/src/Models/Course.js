const { DataTypes } = require("sequelize");
const { patch } = require("../routes");

module.exports = (sequelize) => {
  sequelize.define(
    "course",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
