const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('rating', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
  };