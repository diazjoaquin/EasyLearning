const { User } = require("../../db.js");
const { Op } = require("sequelize");

async function getUserByEmail({ email: emailAddress }) {
  try {
    const id = await User.findOne({
      where: { [Op.iLike]: emailAddress },
    });
    return id;
  } catch (error) {
    return error;
  }
}

module.exports = { getUserByEmail };
