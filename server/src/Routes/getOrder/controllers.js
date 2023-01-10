const { Orderr, User } = require("../../db");
const Sequelize = require("sequelize");
const op = Sequelize.Op;

async function getOrders({ userId }) {
  let user = await User.findOne({
    where: { id: userId },
    include: [{ model: Orderr }],
  });

  if (!user) throw new Error("No user in db.");

  return user;
}

module.exports = { getOrders };
