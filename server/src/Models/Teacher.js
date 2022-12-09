const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("teacher", {}, { timestamps: false });
};
