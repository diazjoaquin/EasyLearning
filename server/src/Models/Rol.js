const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("rol", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
