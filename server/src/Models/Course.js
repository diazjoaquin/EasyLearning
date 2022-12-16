const { DataTypes } = require("sequelize");

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
      image: {
        type: DataTypes.TEXT,
        defaultValue:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8pD3SpnL0eQJ2kczwprcvJ0An1Ykgw5ggRw&usqp=CAU",
      },
      students: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
    },
    { timestamps: false }
  );
};
