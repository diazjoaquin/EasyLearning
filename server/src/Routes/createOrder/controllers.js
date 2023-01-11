const { Orderr, User } = require("../../db");

const createOrder = async ({ prodd, userDB }) => {
  try {
    const user = await User.findByPk(userDB.id);
    const orders = await Orderr.bulkCreate(prodd);

    await orders.map(async (e) => {
      await e.addUser(user);
    });

    return "asd";
  } catch (error) {
    return error;
  }
};

module.exports = { createOrder };
