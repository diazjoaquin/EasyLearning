const { DataTypes } = require("sequelize");
const { patch } = require("../routes");

module.exports = (sequelize) => {
  sequelize.define(
    "course",
    {
      teacher: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      price: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
    },
    { timestamps: false }
  );
};
