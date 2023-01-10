const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("orderr", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          price: {
            type: DataTypes.INTEGER,
            allowNull: false
          }
   },
    { timestamps: false }
   )
} 