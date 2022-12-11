const { DataTypes } = require("sequelize");
const { patch } = require("../routes");

module.exports = (sequelize) => {
  sequelize.define(
    "course",
    {
      teacher: {
        // type: DataTypes.INTEGER,
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
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
