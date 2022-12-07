const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("rating", {
    score: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
