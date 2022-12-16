const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "video",
    {
      //Agregar propiedad name video, para que cuando se renderizen todos los videos, tengan su nombre que los diferencie.
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
