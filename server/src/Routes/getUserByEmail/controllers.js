const { User } = require("../../db.js");
const { Op } = require("sequelize");

async function getUserByEmail({ email }) {
  try {
    const id = await User.findOne({
      where: { emailAddress: email },
    });
    return id;
  } catch (error) {
    return error;
  }
}

module.exports = { getUserByEmail };
