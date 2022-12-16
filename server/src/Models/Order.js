const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("order", {
        coursesOrder:{
            type:DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
        }
   },
    { timestamps: false }
   )
}
