const { Orderr, User } = require("../../db.js");

const getAllOrders = async () => {
  try {
    let orders = await Orderr.findAll({
      include: {
        model: User,
      },
    });
    return orders;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllOrders };
