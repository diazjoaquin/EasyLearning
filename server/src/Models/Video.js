const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "video",
    {
      nameVideo: {
        type: DataTypes.STRING,
        defaultValue: "This video doesn't have a name",
      },
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
