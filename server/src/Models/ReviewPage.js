const { DataTypes, NOW } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "reviewPage",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comments: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        defaultValue: NOW,
      },
    },
    { timestamps: false }
  );
};
