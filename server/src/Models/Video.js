const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "video",
    {
      urlVideo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
